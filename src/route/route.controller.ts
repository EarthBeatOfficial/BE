import { Controller, Post, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { RouteService } from './route.service';
import { RecommendRouteDto } from './dto/recommend-route.dto';

@Controller('routes')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Post('recommend')
  recommendRoute(
    @Body('userId', ParseIntPipe) userId: number,
    @Body() dto: RecommendRouteDto,
  ) {
    return this.routeService.recommendRoute(userId, dto);
  }
} 