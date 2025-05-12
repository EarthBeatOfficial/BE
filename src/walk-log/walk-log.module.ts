import { Module } from '@nestjs/common';
import { WalkLogService } from './walk-log.service';
import { WalkLogController } from './walk-log.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { WalkLogRepository } from './walk-log.repository';
@Module({
  imports: [PrismaModule],
  controllers: [WalkLogController],
  providers: [WalkLogService, WalkLogRepository],
  exports: [WalkLogService],
})
export class WalkLogModule {}
