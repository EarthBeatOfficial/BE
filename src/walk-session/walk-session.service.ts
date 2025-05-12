import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { WalkSessionRepository } from './walk-session.repository';

@Injectable()
export class WalkSessionService {
  constructor(private readonly walkSessionRepository: WalkSessionRepository) {}

  async startWalking(userId: number, routeId: number) {
    const activeSession =
      await this.walkSessionRepository.getActiveSessionByUserId(userId);

    if (activeSession) {
      throw new BadRequestException(
        'You already have an active walking session',
      );
    }

    const route = await this.walkSessionRepository.getRouteById(routeId);

    if (!route) {
      throw new NotFoundException(`Route with ID ${routeId} not found`);
    }

    return this.walkSessionRepository.startWalking(userId, routeId);
  }

  async endWalking(userId: number, sessionId: number) {
    const session = await this.walkSessionRepository.getActiveSessionById(
      sessionId,
      userId,
    );

    if (!session) {
      throw new NotFoundException('Active walking session not found');
    }

    // Get all responses made during this walk session
    const responses =
      await this.walkSessionRepository.findResponsesDuringSession(
        userId,
        session.startedAt,
      );

    // Create walk log and update session in a transaction
    return this.walkSessionRepository.endSessionAndCreateWalkLog(
      sessionId,
      session.route.distance,
      responses.map((response) => ({
        signalId: response.signalId,
        id: response.id,
      })),
    );
  }

  async getActiveSession(userId: number) {
    const activeSession =
      await this.walkSessionRepository.getActiveSessionByUserId(userId);

    if (!activeSession) {
      throw new NotFoundException('Active walking session not found');
    }

    return activeSession;
  }
}
