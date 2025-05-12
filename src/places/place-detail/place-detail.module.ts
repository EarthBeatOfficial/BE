import { Module } from '@nestjs/common';
import { PlaceDetailService } from './place-detail.service';
import { PlaceDetailController } from './place-detail.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [PlaceDetailController],
  providers: [PlaceDetailService],
  exports: [PlaceDetailService],
})
export class PlaceDetailModule {}
