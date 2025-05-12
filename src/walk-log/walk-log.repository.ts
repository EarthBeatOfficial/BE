import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WalkLogRepository {
  constructor(private prisma: PrismaService) {}

  async getUserWalkLogs(userId: number) {
    return this.prisma.walkLog.findMany({
      where: {
        session: { userId },
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
  }

  async getUserRespondedSignalsCount(userId: number) {
    return this.prisma.respondedSignal.count({
      where: {
        walkLog: { session: { userId } },
      },
    });
  }
}
