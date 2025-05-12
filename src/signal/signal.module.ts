import { Module } from '@nestjs/common';
import { SignalService } from './signal.service';
import { SignalController } from './signal.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ScheduleModule } from '@nestjs/schedule';
import { SignalRepository } from './signal.repository';
@Module({
  imports: [PrismaModule, ScheduleModule.forRoot()],
  controllers: [SignalController],
  providers: [SignalService, SignalRepository],
  exports: [SignalService],
})
export class SignalModule {}
