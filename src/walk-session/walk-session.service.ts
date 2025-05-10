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
    // Check if route exists
    const route = await this.prisma.route.findUnique({
      where: { id: routeId },
    });

    if (!route) {
      throw new NotFoundException(`Route with id ${routeId} not found`);
    }

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

  async endWalking(
    userId: number,
    sessionId: number,
    walkData: { distance: number; duration: number },
  ) {
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

    // Get all responses made during this walk session
    const responses = await this.prisma.response.findMany({
      where: {
        userId,
        respondedAt: {
          gte: session.startedAt,
          lte: new Date(),
        },
      },
      include: {
        signal: {
          include: {
            category: true,
          },
        },
      },
    });

    // Update session status and create walk log with responded signals
    return this.prisma.walkSession.update({
      where: { id: sessionId },
      data: {
        status: SessionStatus.COMPLETED,
        finishedAt: new Date(),
        walkLog: {
          create: {
            distance: walkData.distance,
            walkedAt: new Date(),
            respondedSignals: {
              create: responses.map(response => ({
                signalId: response.signalId,
                responseId: response.id,
                respondedAt: response.respondedAt,
              })),
            },
          },
        },
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
                response: true,
              },
            },
          },
        },
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
        walkLog: {
          include: {
            respondedSignals: {
              include: {
                signal: {
                  include: {
                    category: true,
                  },
                },
                response: true,
              },
            },
          },
        },
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
        walkLog: {
          include: {
            respondedSignals: {
              include: {
                signal: {
                  include: {
                    category: true,
                  },
                },
                response: true,
              },
            },
          },
        },
      },
      orderBy: {
        startedAt: 'desc',
      },
    });
  }
}
