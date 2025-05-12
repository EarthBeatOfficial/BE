import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { CreateSignalDto } from './dto/create-signal.dto';
import { SignalRepository } from './signal.repository';

enum SignalStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

@Injectable()
export class SignalService {
  constructor(private readonly signalRepository: SignalRepository) {}

  async createSignal(userId: number, createSignalDto: CreateSignalDto) {
    const signal = await this.signalRepository.createSignal(
      userId,
      createSignalDto,
    );
    return signal;
  }

  async acceptSignal(signalId: number, userId: number) {
    const signal = await this.signalRepository.getSignalById(signalId);

    if (!signal) {
      throw new NotFoundException(`Signal with id ${signalId} not found`);
    }

    if (signal.status !== SignalStatus.PENDING) {
      throw new BadRequestException('Signal is not available for acception');
    }

    if (signal.userId === userId) {
      throw new ForbiddenException('Cannot accept your own signal');
    }

    return this.signalRepository.acceptSignal(signalId, userId);
  }

  async cancelSignal(signalId: number, userId: number) {
    const signal = await this.signalRepository.getSignalById(signalId);

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

    return this.signalRepository.cancelSignal(signalId, userId);
  }

  async deleteSignal(id: number, userId: number) {
    const signal = await this.signalRepository.getSignalById(id);

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

    return this.signalRepository.deleteSignal(id);
  }

  async getActiveSignals() {
    return this.signalRepository.getActiveSignals();
  }

  async getMySignals(userId: number) {
    return this.signalRepository.getMySignals(userId);
  }

  // async completeSignal(signalId: number, userId: number) {
  //   const signal = await this.prisma.signal.findUnique({
  //     where: { id: signalId },
  //   });

  //   if (!signal) {
  //     throw new NotFoundException(`Signal with id ${signalId} not found`);
  //   }

  //   if (signal.selectedUserId !== userId) {
  //     throw new ForbiddenException(
  //       'Only the selected user can complete this signal',
  //     );
  //   }

  //   if (signal.status !== SignalStatus.IN_PROGRESS) {
  //     throw new BadRequestException('Signal is not in progress');
  //   }

  //   return this.prisma.signal.update({
  //     where: { id: signalId },
  //     data: {
  //       status: SignalStatus.COMPLETED,
  //     },
  //   });
  // }

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
}
