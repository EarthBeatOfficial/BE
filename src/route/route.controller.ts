import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { RouteService } from './route.service';
import { RecommendRouteDto } from './dto/recommend-route.dto';
import { ApiOperation, ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Routes')
@Controller('routes')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Post('recommend')
  @ApiOperation({ summary: 'Recommends a route' })
  @ApiBody({
    schema: {
      type: 'object',
      required: ['userId', 'location', 'themeId', 'distance'],
      properties: {
        userId: {
          type: 'number',
          description: 'ID of the user requesting the route',
        },
        location: {
          type: 'string',
          description: 'Starting location as JSON string',
          example: '{"latitude": 37.544582, "longitude": 127.037589}',
        },
        themeId: {
          type: 'number',
          description: 'ID of the theme for the route',
        },
        distance: {
          type: 'number',
          description: 'Distance in kilometers',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Route successfully recommended',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  @ApiResponse({
    status: 404,
    description: 'Theme not found',
  })
  recommendRoute(
    @Body('userId', ParseIntPipe) userId: number,
    @Body() dto: RecommendRouteDto,
  ) {
    return this.routeService.recommendRoute(userId, dto);
  }
}
