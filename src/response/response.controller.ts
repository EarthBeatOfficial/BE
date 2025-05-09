import { Controller, Post, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ResponseService } from './response.service';
import { CreateResponseDto } from './dto/create-response.dto';

@Controller('signals')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Post(':signalId/respond')
  respondToSignal(
    @Param('signalId', ParseIntPipe) signalId: number,
    @Body() dto: CreateResponseDto,
  ) {
    return this.responseService.respondToSignal(signalId, dto);
  }

  @Get(':signalId/responses')
  getSignalResponses(@Param('signalId', ParseIntPipe) signalId: number) {
    return this.responseService.getSignalResponses(signalId);
  }
} 