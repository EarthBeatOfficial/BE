import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { ResponseRepository } from './response.repository';

enum SignalStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

@Injectable()
export class ResponseService {
  constructor(private readonly responseRepository: ResponseRepository) {}

  async respondToSignal(signalId: number, dto: CreateResponseDto) {
    const signal = await this.responseRepository.getSignalById(signalId);

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
    return this.responseRepository.createResponse(signalId, dto);
  }

  async getMySignalResponses(userId: number) {
    return this.responseRepository.getMySignalResponses(userId);
  }

  async markResponseAsRead(responseId: number) {
    const response = await this.responseRepository.getResponseById(responseId);

    if (!response) {
      throw new NotFoundException(`Response with id ${responseId} not found`);
    }

    if (response.isRead) {
      throw new BadRequestException('Response already marked as read');
    }

    return this.responseRepository.markResponseAsRead(responseId);
  }
}
