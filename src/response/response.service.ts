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

  async getSignalResponses(signalId: number) {
    const signal = await this.prisma.signal.findUnique({
      where: { id: signalId },
    });

    if (!signal) {
      throw new NotFoundException(`Signal with id ${signalId} not found`);
    }

    return this.prisma.response.findMany({
      where: { signalId },
      include: {
        user: {
          select: {
            id: true,
            username: true,
          },
        },
        signal: {
          select: {
            title: true,
          },
        },
      },
      orderBy: {
        respondedAt: 'desc',
      },
    });
  }
}
