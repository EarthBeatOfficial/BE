import { Controller, Post, Body } from '@nestjs/common';
import { RouteService } from './route.service';
import { RecommendRouteDto } from './dto/recommend-route.dto';
import {
  ApiOperation,
  ApiTags,
  ApiBody,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

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
  @ApiCreatedResponse({
    description: 'Route successfully recommended',
    example: {
      origin: {
        latitude: 37.544582,
        longitude: 127.037589,
      },
      destination: {
        latitude: 37.544582,
        longitude: 127.037589,
      },
      waypoints: [
        {
          latitude: 37.544582,
          longitude: 127.037589,
        },
        {
          latitude: 37.544582,
          longitude: 127.037589,
        },
      ],
      travelMode: "google.maps.TravelMode.WALKING",
    },
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  @ApiNotFoundResponse({
    description: 'Theme not found',
  })
  recommendRoute(@Body() dto: RecommendRouteDto) {
    return this.routeService.recommendRoute(dto.userId, dto);
  }
}
