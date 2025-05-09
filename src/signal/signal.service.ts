import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSignalDto } from './dto/create-signal.dto';

enum SignalStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

@Injectable()
export class SignalService {
  constructor(private prisma: PrismaService) {}

  async createSignal(userId: number, dto: CreateSignalDto) {
    return this.prisma.signal.create({
      data: {
        userId,
        categoryId: dto.categoryId,
        title: dto.title,
        description: dto.description,
        lat: dto.lat,
        lng: dto.lng,
        timeLimit: dto.timeLimit,
        status: SignalStatus.PENDING,
      },
    });
  }

  async selectSignal(signalId: number, userId: number) {
    const signal = await this.prisma.signal.findUnique({
      where: { id: signalId },
    });

    if (!signal) {
      throw new NotFoundException(`Signal with ID ${signalId} not found`);
    }

    if (signal.status !== SignalStatus.PENDING) {
      throw new BadRequestException('Signal is not available for selection');
    }

    if (signal.userId === userId) {
      throw new BadRequestException('Cannot select your own signal');
    }

    return this.prisma.signal.update({
      where: { id: signalId },
      data: {
        status: SignalStatus.IN_PROGRESS,
        selectedUserId: userId,
      },
    });
  }

  async cancelSignal(signalId: number, userId: number) {
    const signal = await this.prisma.signal.findUnique({
      where: { id: signalId },
    });

    if (!signal) {
      throw new NotFoundException(`Signal with ID ${signalId} not found`);
    }

    if (signal.selectedUserId !== userId) {
      throw new BadRequestException('You are not the user who selected this signal');
    }

    if (signal.status !== SignalStatus.IN_PROGRESS) {
      throw new BadRequestException('Signal is not in progress');
    }

    return this.prisma.signal.update({
      where: { id: signalId },
      data: {
        status: SignalStatus.PENDING,
        selectedUserId: null,
      },
    });
  }

  async completeSignal(signalId: number, userId: number) {
    const signal = await this.prisma.signal.findUnique({
      where: { id: signalId },
    });

    if (!signal) {
      throw new NotFoundException(`Signal with ID ${signalId} not found`);
    }

    if (signal.selectedUserId !== userId) {
      throw new BadRequestException('Only the selected user can complete this signal');
    }

    if (signal.status !== SignalStatus.IN_PROGRESS) {
      throw new BadRequestException('Signal is not in progress');
    }

    return this.prisma.signal.update({
      where: { id: signalId },
      data: {
        status: SignalStatus.COMPLETED,
      },
    });
  }

  async getActiveSignals() {
    return this.prisma.signal.findMany({
      where: {
        status: SignalStatus.PENDING,
      },
      include: {
        category: true,
      },
    });
  }

  async getUserSignals(userId: number) {
    return this.prisma.signal.findMany({
      where: {
        OR: [
          { userId },
          { selectedUserId: userId },
        ],
      },
      include: {
        category: true,
        responses: {
          include: {
            user: true,
          },
        },
      },
    });
  }
} 