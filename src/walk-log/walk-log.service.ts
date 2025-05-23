import { Injectable } from '@nestjs/common';
import { WalkLogRepository } from './walk-log.repository';
import { WalkLogDto } from './dto/walk-log.dto';

@Injectable()
export class WalkLogService {
  constructor(private readonly walkLogRepository: WalkLogRepository) {}

  async getUserWalkLogs(userId: number): Promise<WalkLogDto[]> {
    const walkLogs = await this.walkLogRepository.getUserWalkLogs(userId);

    return walkLogs.map((log) => ({
      distance: log.distance,
      walkedAt: log.walkedAt,
      theme: log.session.route.theme,
      respondedSignals: log.respondedSignals.map((ws) => ({
        title: ws.signal.title,
        description: ws.signal.description,
        categoryId: ws.signal.category.id,
        category: ws.signal.category.name,
        respondedAt: ws.respondedAt,
      })),
    }));
  }

  async getUserRespondedSignalsCount(userId: number): Promise<number> {
    const count =
      await this.walkLogRepository.getUserRespondedSignalsCount(userId);

    return count;
  }
}
