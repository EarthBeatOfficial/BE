import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AutoCompleteController } from './auto-complete.controller';
import { AutoCompleteService } from './auto-complete.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [AutoCompleteController],
  providers: [AutoCompleteService],
  exports: [AutoCompleteService],
})
export class AutoCompleteModule {}
