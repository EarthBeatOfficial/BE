import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSignalDto } from './dto/create-signal.dto';
enum SignalStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

@Injectable()
export class SignalRepository {
  constructor(private prisma: PrismaService) {}

  async createSignal(userId: number, createSignalDto: CreateSignalDto) {
    const signal = await this.prisma.signal.create({
      data: {
        ...createSignalDto,
        userId,
        status: SignalStatus.PENDING,
        expiresAt: new Date(Date.now() + createSignalDto.timeLimit * 60 * 1000), // Convert minutes to milliseconds
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return signal;
  }

  async getSignalById(signalId: number) {
    return this.prisma.signal.findUnique({
      where: { id: signalId },
    });
  }

  async acceptSignal(signalId: number, userId: number) {
    return this.prisma.signal.update({
      where: { id: signalId },
      data: {
        status: SignalStatus.IN_PROGRESS,
        selectedUserId: userId,
      },
    });
  }

  async cancelSignal(signalId: number, userId: number) {
    return this.prisma.signal.update({
      where: { id: signalId },
      data: {
        status: SignalStatus.PENDING,
        selectedUserId: null,
      },
    });
  }

  async deleteSignal(id: number) {
    return this.prisma.signal.delete({
      where: { id },
    });
  }

  async getActiveSignals() {
    return this.prisma.signal.findMany({
      where: {
        status: SignalStatus.PENDING,
      },
    });
  }

  async getMySignals(userId: number) {
    return this.prisma.signal.findMany({
      where: {
        selectedUserId: userId,
        status: SignalStatus.IN_PROGRESS,
      },
    });
  }
}
