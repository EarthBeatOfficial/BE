import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

enum SessionStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

@Injectable()
export class WalkSessionRepository {
  constructor(private prisma: PrismaService) {}

  async startWalking(userId: number, routeId: number) {
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

  async endSessionAndCreateWalkLog(
    sessionId: number,
    distance: number,
    responses: { signalId: number; id: number }[],
  ) {
    return this.prisma.$transaction(async (prisma) => {
      const walkLog = await prisma.walkLog.create({
        data: {
          sessionId,
          distance,
          walkedAt: new Date(),
          respondedSignals: {
            create: responses.map((response) => ({
              signalId: response.signalId,
              responseId: response.id,
            })),
          },
        },
      });

      const updatedSession = await prisma.walkSession.update({
        where: { id: sessionId },
        data: { status: SessionStatus.COMPLETED, finishedAt: new Date() },
        include: {
          walkLog: {
            include: {
              respondedSignals: {
                include: { signal: { include: { category: true } } },
              },
            },
          },
        },
      });

      return updatedSession;
    });
  }

  async getActiveSessionByUserId(userId: number) {
    return this.prisma.walkSession.findFirst({
      where: { userId, status: SessionStatus.IN_PROGRESS },
      include: { route: true },
    });
  }

  async getActiveSessionById(sessionId: number, userId: number) {
    return this.prisma.walkSession.findFirst({
      where: { id: sessionId, userId, status: SessionStatus.IN_PROGRESS },
      include: { route: true },
    });
  }

  async getRouteById(routeId: number) {
    return this.prisma.route.findUnique({
      where: { id: routeId },
    });
  }

  async findResponsesDuringSession(userId: number, startedAt: Date) {
    return this.prisma.response.findMany({
      where: { userId, respondedAt: { gte: startedAt, lte: new Date() } },
    });
  }
}
