import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { SignalService } from './signal.service';
import { CreateSignalDto } from './dto/create-signal.dto';

@Controller('signals')
export class SignalController {
  constructor(private readonly signalService: SignalService) {}

  @Post()
  create(@Body() createSignalDto: CreateSignalDto) {
    return this.signalService.createSignal(createSignalDto.userId, createSignalDto);
  }

  @Post(':id/select')
  selectSignal(@Param('id') id: string, @Body('userId') userId: number) {
    return this.signalService.selectSignal(+id, userId);
  }

  @Post(':id/cancel')
  cancelSignal(@Param('id') id: string, @Body('userId') userId: number) {
    return this.signalService.cancelSignal(+id, userId);
  }

  @Post(':id/complete')
  completeSignal(@Param('id') id: string, @Body('userId') userId: number) {
    return this.signalService.completeSignal(+id, userId);
  }

  @Get('active')
  getActiveSignals() {
    return this.signalService.getActiveSignals();
  }

  @Get('user/:userId')
  getUserSignals(@Param('userId') userId: string) {
    return this.signalService.getUserSignals(+userId);
  }
} 