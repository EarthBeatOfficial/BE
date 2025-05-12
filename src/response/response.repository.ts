import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { SignalStatus } from 'generated/prisma';

@Injectable()
export class ResponseRepository {
  constructor(private prisma: PrismaService) {}

  async getSignalById(signalId: number) {
    return this.prisma.signal.findUnique({
      where: { id: signalId },
    });
  }

  async getResponseById(responseId: number) {
    return this.prisma.response.findUnique({
      where: { id: responseId },
    });
  }

  async createResponse(signalId: number, dto: CreateResponseDto) {
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
        signal: { select: { title: true } },
      },
    });
  }

  async markResponseAsRead(responseId: number) {
    return this.prisma.response.update({
      where: { id: responseId },
      data: { isRead: true },
    });
  }
}
