import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateResponseDto } from './dto/create-response.dto';

enum SignalStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

@Injectable()
export class ResponseService {
  constructor(private prisma: PrismaService) {}

  async respondToSignal(signalId: number, dto: CreateResponseDto) {
    const signal = await this.prisma.signal.findUnique({
      where: { id: signalId },
    });

    if (!signal) {
      throw new NotFoundException(`Signal with id ${signalId} not found`);
    }

    if (signal.userId === dto.userId) {
      throw new ForbiddenException('Cannot respond to your own signal');
    }

    if (signal.status === SignalStatus.COMPLETED) {
      throw new BadRequestException('Cannot respond to a completed signal');
    }

    if (signal.status !== SignalStatus.IN_PROGRESS) {
      throw new BadRequestException(
        'Signal must be accepted before responding',
      );
    }

    if (signal.selectedUserId !== dto.userId) {
      throw new ForbiddenException(
        'Only the user who accepted the signal can respond to it',
      );
    }

    // Create response and update signal status in a transaction
    return this.prisma.$transaction(async (prisma) => {
      const response = await prisma.response.create({
        data: {
          signalId,
          userId: dto.userId,
          message: dto.message,
        },
        include: {
          signal: {
            select: {
              userId: true,
              title: true,
            },
          },
        },
      });

      await prisma.signal.update({
        where: { id: signalId },
        data: {
          status: SignalStatus.COMPLETED,
        },
      });

      return response;
    });
  }

  async getMySignalResponses(userId: number) {
    return this.prisma.response.findMany({
      where: {
        isRead: false,
        signal: {
          userId: userId,
        },
      },
      include: {
        signal: {
          select: {
            title: true,
          },
        },
      },
    });
  }

  async markResponseAsRead(responseId: number) {
    const response = await this.prisma.response.findUnique({
      where: { id: responseId },
    });

    if (!response) {
      throw new NotFoundException(`Response with id ${responseId} not found`);
    }

    if (response.isRead) {
      throw new BadRequestException('Response already marked as read');
    }

    return this.prisma.response.update({
      where: { id: responseId },
      data: {
        isRead: true,
      },
    });
  }
}
