import { Module } from '@nestjs/common';
import { WalkSessionService } from './walk-session.service';
import { WalkSessionController } from './walk-session.controller';
import { WalkSessionRepository } from './walk-session.repository';
@Module({
  controllers: [WalkSessionController],
  providers: [WalkSessionService, WalkSessionRepository],
  exports: [WalkSessionService],
})
export class WalkSessionModule {}
