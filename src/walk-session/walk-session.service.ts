import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

enum SessionStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

@Injectable()
export class WalkSessionService {
  constructor(private prisma: PrismaService) {}

  async startWalking(userId: number, routeId: number) {
    // Check if user already has an active session
    const activeSession = await this.prisma.walkSession.findFirst({
      where: {
        userId,
        status: SessionStatus.IN_PROGRESS,
      },
    });

    if (activeSession) {
      throw new BadRequestException('You already have an active walking session');
    }

    // Create new walk session
    return this.prisma.walkSession.create({
      data: {
        userId,
        routeId,
        status: SessionStatus.IN_PROGRESS,
        startedAt: new Date(),
      },
      include: {
        route: {
          include: {
            points: true,
            theme: true,
          },
        },
      },
    });
  }

  async endWalking(userId: number, sessionId: number, walkData: { distance: number; duration: number }) {
    const session = await this.prisma.walkSession.findFirst({
      where: {
        id: sessionId,
        userId,
        status: SessionStatus.IN_PROGRESS,
      },
    });

    if (!session) {
      throw new NotFoundException('Active walking session not found');
    }

    // Update session status and create walk log
    return this.prisma.walkSession.update({
      where: { id: sessionId },
      data: {
        status: SessionStatus.COMPLETED,
        finishedAt: new Date(),
        walkLog: {
          create: {
            distance: walkData.distance,
            walkedAt: new Date(),
          },
        },
      },
      include: {
        walkLog: true,
        route: {
          include: {
            points: true,
            theme: true,
          },
        },
      },
    });
  }

  async getActiveSession(userId: number) {
    return this.prisma.walkSession.findFirst({
      where: {
        userId,
        status: SessionStatus.IN_PROGRESS,
      },
      include: {
        route: {
          include: {
            points: true,
            theme: true,
          },
        },
        walkLog: true,
      },
    });
  }

  async getUserSessions(userId: number) {
    return this.prisma.walkSession.findMany({
      where: {
        userId,
        status: SessionStatus.COMPLETED,
      },
      include: {
        route: {
          include: {
            points: true,
            theme: true,
          },
        },
        walkLog: true,
      },
      orderBy: {
        startedAt: 'desc',
      },
    });
  }
} 