import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { WalkLogDto } from './dto/walk-log.dto';

@Injectable()
export class WalkLogService {
  constructor(private prisma: PrismaService) {}

  async getUserWalkLogs(userId: number): Promise<WalkLogDto[]> {
    const walkLogs = await this.prisma.walkLog.findMany({
      where: {
        session: {
          userId,
        },
      },
      include: {
        respondedSignals: {
          include: {
            signal: {
              include: {
                category: true,
              },
            },
          },
        },
      },
      orderBy: {
        walkedAt: 'desc',
      },
    });

    return walkLogs.map(log => ({
      distance: log.distance,
      walkedAt: log.walkedAt,
      respondedSignals: log.respondedSignals.map(ws => ({
        title: ws.signal.title,
        description: ws.signal.description,
        category: ws.signal.category.name,
        respondedAt: ws.respondedAt,
      })),
    }));
  }

  async getUserRespondedSignalsCount(userId: number): Promise<number> {
    const count = await this.prisma.respondedSignal.count({
      where: {
        walkLog: {
          session: {
            userId,
          },
        },
      },
    });

    return count;
  }
} 