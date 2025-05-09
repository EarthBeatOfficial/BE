import { Module } from '@nestjs/common';
import { WalkLogService } from './walk-log.service';
import { WalkLogController } from './walk-log.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WalkLogController],
  providers: [WalkLogService],
  exports: [WalkLogService],
})
export class WalkLogModule {}
