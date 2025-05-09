import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateResponseDto } from './dto/create-response.dto';

@Injectable()
export class ResponseService {
  constructor(private prisma: PrismaService) {}

  async respondToSignal(signalId: number, dto: CreateResponseDto) {
    const signal = await this.prisma.signal.findUnique({
      where: { id: signalId },
    });

    if (!signal) {
      throw new NotFoundException(`Signal with ID ${signalId} not found`);
    }

    return this.prisma.response.create({
      data: {
        signalId,
        userId: dto.userId,
        message: dto.message,
      },
    });
  }

  async getSignalResponses(signalId: number) {
    const signal = await this.prisma.signal.findUnique({
      where: { id: signalId },
    });

    if (!signal) {
      throw new NotFoundException(`Signal with ID ${signalId} not found`);
    }

    return this.prisma.response.findMany({
      where: { signalId },
      include: {
        user: true,
      },
    });
  }
} 