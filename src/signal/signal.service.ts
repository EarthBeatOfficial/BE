import {
  Injectable,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSignalDto } from './dto/create-signal.dto';
import { Cron, CronExpression } from '@nestjs/schedule';

enum SignalStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

@Injectable()
export class SignalService {
  constructor(private prisma: PrismaService) {}

  async createSignal(userId: number, createSignalDto: CreateSignalDto) {
    const signal = await this.prisma.signal.create({
      data: {
        ...createSignalDto,
        userId,
        status: 'PENDING',
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

  // @Cron(CronExpression.EVERY_MINUTE)
  // async deleteExpiredSignals() {
  //   const now = new Date();
  //   await this.prisma.signal.deleteMany({
  //     where: {
  //       expiresAt: {
  //         lte: now,
  //       },
  //       status: {
  //         not: SignalStatus.COMPLETED,
  //       },
  //     },
  //   });
  // }

  async acceptSignal(signalId: number, userId: number) {
    const signal = await this.prisma.signal.findUnique({
      where: { id: signalId },
    });

    if (!signal) {
      throw new NotFoundException(`Signal with id ${signalId} not found`);
    }

    if (signal.status !== SignalStatus.PENDING) {
      throw new BadRequestException('Signal is not available for acception');
    }

    if (signal.userId === userId) {
      throw new ForbiddenException('Cannot accept your own signal');
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
      throw new NotFoundException(`Signal with id ${signalId} not found`);
    }

    if (signal.selectedUserId !== userId) {
      throw new ForbiddenException(
        'You are not the user who selected this signal',
      );
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
      throw new NotFoundException(`Signal with id ${signalId} not found`);
    }

    if (signal.selectedUserId !== userId) {
      throw new ForbiddenException(
        'Only the selected user can complete this signal',
      );
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
      // include: {
      //   category: true,
      // },
    });
  }

  async deleteSignal(id: number, userId: number) {
    const signal = await this.prisma.signal.findUnique({
      where: { id },
    });

    if (!signal) {
      throw new NotFoundException(`Signal with id ${id} not found`);
    }

    if (signal.status !== SignalStatus.PENDING) {
      throw new BadRequestException(
        'Signal is not available for deletion since it is not pending',
      );
    }

    if (signal.userId !== userId) {
      throw new ForbiddenException('Only the creator can delete this signal');
    }

    return this.prisma.signal.delete({
      where: { id },
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
