import { Module } from '@nestjs/common';
import { WalkSessionService } from './walk-session.service';
import { WalkSessionController } from './walk-session.controller';

@Module({
  controllers: [WalkSessionController],
  providers: [WalkSessionService],
  exports: [WalkSessionService],
})
export class WalkSessionModule {}
