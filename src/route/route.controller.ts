import { Controller, Post, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { RouteService } from './route.service';
import { RecommendRouteDto } from './dto/recommend-route.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Routes')
@Controller('routes')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Post('recommend')
  @ApiOperation({ summary: 'Recommends a route' })
  recommendRoute(
    @Body('userId', ParseIntPipe) userId: number,
    @Body() dto: RecommendRouteDto,
  ) {
    return this.routeService.recommendRoute(userId, dto);
  }
} 