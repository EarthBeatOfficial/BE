import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WalkSessionService } from './walk-session.service';

@Controller('walk-sessions')
export class WalkSessionController {
  constructor(private readonly walkSessionService: WalkSessionService) {}

  @Post('start')
  startWalking(@Body() body: { userId: number; routeId: number }) {
    return this.walkSessionService.startWalking(body.userId, body.routeId);
  }

  @Post(':id/end')
  endWalking(
    @Param('id') id: string,
    @Body() body: { userId: number; distance: number; duration: number },
  ) {
    return this.walkSessionService.endWalking(body.userId, +id, {
      distance: body.distance,
      duration: body.duration,
    });
  }

  @Get('active/:userId')
  getActiveSession(@Param('userId') userId: number) {
    return this.walkSessionService.getActiveSession(userId);
  }

  @Get('user/:userId')
  getUserSessions(@Param('userId') userId: number) {
    return this.walkSessionService.getUserSessions(userId);
  }
}
