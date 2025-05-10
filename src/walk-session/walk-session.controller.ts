import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { WalkSessionService } from './walk-session.service';
import {
  ApiOperation,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Walk Sessions')
@Controller('walk-sessions')
export class WalkSessionController {
  constructor(private readonly walkSessionService: WalkSessionService) {}

  @Post('start')
  @ApiOperation({ summary: 'Start a new walk session' })
  @ApiBody({
    schema: {
      type: 'object',
      required: ['userId', 'routeId'],
      properties: {
        userId: {
          type: 'number',
          description: 'ID of the user starting the walk',
        },
        routeId: {
          type: 'number',
          description: 'ID of the route to walk',
        },
      },
    },
    examples: {
      example1: {
        value: {
          userId: 1,
          routeId: 2,
        },
        summary: 'Example of starting a walk session',
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Walk session successfully started',
    example: {
      id: 1,
      userId: 1,
      routeId: 2,
      status: 'IN_PROGRESS',
      startedAt: '2024-03-20T10:00:00Z',
      route: {
        id: 2,
        name: 'Park Route',
        theme: {
          id: 1,
          name: 'Nature',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'User already has an active session',
    example: {
      message: 'You already have an active walking session',
      error: 'Bad Request',
      statusCode: 400,
    },
  })
  startWalking(
    @Body('userId', ParseIntPipe) userId: number,
    @Body('routeId', ParseIntPipe) routeId: number,
  ) {
    return this.walkSessionService.startWalking(userId, routeId);
  }

  @Post(':id/end')
  @ApiOperation({ summary: 'End the walk session' })
  @ApiParam({ name: 'id', description: 'Session ID' })
  @ApiBody({
    schema: {
      type: 'object',
      required: ['userId'],
      properties: {
        userId: {
          type: 'number',
          description: 'ID of the user ending the walk',
        },
      },
    },
    examples: {
      example1: {
        value: {
          userId: 1,
        },
        summary: 'Example of ending a walk session',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Walk session successfully ended',
  })
  @ApiResponse({
    status: 404,
    description: 'Active walking session not found',
  })
  endWalking(
    @Param('id', ParseIntPipe) id: number,
    @Body('userId', ParseIntPipe) userId: number,
  ) {
    return this.walkSessionService.endWalking(userId, id);
  }

  @Get('active/:userId')
  @ApiOperation({ summary: 'Get active walk session for a user' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({
    status: 200,
    description: 'Active walk session if exists',
  })
  getActiveSession(@Param('userId', ParseIntPipe) userId: number) {
    return this.walkSessionService.getActiveSession(userId);
  }
}
