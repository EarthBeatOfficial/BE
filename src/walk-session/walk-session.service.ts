import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

enum SessionStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
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
      throw new BadRequestException(
        'You already have an active walking session',
      );
    }

    // Check if route exists
    const route = await this.prisma.route.findUnique({
      where: { id: routeId },
    });

    if (!route) {
      throw new NotFoundException(`Route with ID ${routeId} not found`);
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
            theme: true,
          },
        },
      },
    });
  }

  async endWalking(userId: number, sessionId: number) {
    const session = await this.prisma.walkSession.findFirst({
      where: {
        id: sessionId,
        userId,
        status: SessionStatus.IN_PROGRESS,
      },
      include: {
        route: true,
      },
    });

    if (!session) {
      throw new NotFoundException('Active walking session not found');
    }

    // Get all responses made during this walk session
    const responses = await this.prisma.response.findMany({
      where: {
        userId,
        respondedAt: {
          gte: session.startedAt,
          lte: new Date(),
        },
      },
    });

    // Create walk log and update session in a transaction
    return this.prisma.$transaction(async (prisma) => {
      // Create walk log with calculated distance
      const walkLog = await prisma.walkLog.create({
        data: {
          distance: session.route.distance,
          walkedAt: new Date(),
          sessionId: sessionId,
          respondedSignals: {
            create: responses.map((response) => ({
              signalId: response.signalId,
              responseId: response.id,
            })),
          },
        },
      });

      // Update session status to completed
      return prisma.walkSession.update({
        where: { id: sessionId },
        data: {
          status: SessionStatus.COMPLETED,
          finishedAt: new Date(),
        },
        include: {
          walkLog: {
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
          },
        },
      });
    });
  }

  async getActiveSession(userId: number) {
    const activeSession = await this.prisma.walkSession.findFirst({
      where: {
        userId,
        status: SessionStatus.IN_PROGRESS,
      },
      include: {
        route: true,
      },
    });

    if (!activeSession) {
      throw new NotFoundException('Active walking session not found');
    }

    return activeSession;
  }
}
