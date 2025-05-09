import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { WalkLogService } from './walk-log.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { WalkLogDto } from './dto/walk-log.dto';

@ApiTags('Walk-logs')
@Controller('walk-logs')
export class WalkLogController {
  constructor(private readonly walkLogService: WalkLogService) {}

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get all walk logs for a user' })
  @ApiResponse({
    status: 200,
    description: 'Returns all walk logs for the user',
    type: [WalkLogDto],
  })
  async getUserWalkLogs(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<WalkLogDto[]> {
    return this.walkLogService.getUserWalkLogs(userId);
  }

  @Get('count/:userId')
  @ApiOperation({ summary: 'Get the total count of responds for a user' })
  @ApiResponse({
    status: 200,
    description: 'Returns the total count of responded signals',
    type: Number,
  })
  async getUserRespondedSignalsCount(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<number> {
    return this.walkLogService.getUserRespondedSignalsCount(userId);
  }
}
