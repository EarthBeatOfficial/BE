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
  ApiParam,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
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
  @ApiCreatedResponse({
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
  @ApiBadRequestResponse({
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
  @ApiOkResponse({
    description: 'Walk session successfully ended',
    example: {
      id: 1,
      userId: 1,
      routeId: 2,
      startedAt: '2024-03-20T10:00:00Z',
      completedAt: '2024-03-20T10:05:00Z',
      status: 'COMPLETED',
      walkLog: {
        id: 1,
        sessionId: 1,
        distance: 1.5,
        walkedAt: '2024-03-20T10:00:00Z',
        respondedSignals: [
          {
            id: 1,
            signalId: 1,
            responseId: 1,
          },
        ],
      },
    },
  })
  @ApiNotFoundResponse({
    description: 'Active walking session not found',
    example: {
      message: 'Active walking session not found',
      error: 'Not Found',
      statusCode: 404,
    },
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
  @ApiOkResponse({
    description: 'Active walk session if exists',
    example: {
      id: 1,
      userId: 1,
      routeId: 2,
      startedAt: '2024-03-20T10:00:00Z',
      finishedAt: null,
      status: 'IN_PROGRESS',
      route: {
        id: 2,
        userId: 1,
        distance: 1.5,
        themeId: 1,
        createdAt: '2024-03-20T10:00:00Z',
        completedAt: null,
      },
    },
  })
  @ApiNotFoundResponse({
    description: 'Active walking session not found',
    example: {
      message: 'Active walking session not found',
      error: 'Not Found',
      statusCode: 404,
    },
  })
  getActiveSession(@Param('userId', ParseIntPipe) userId: number) {
    return this.walkSessionService.getActiveSession(userId);
  }
}
