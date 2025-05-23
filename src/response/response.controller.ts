import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { ResponseService } from './response.service';
import { CreateResponseDto } from './dto/create-response.dto';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';

@ApiTags('Responses')
@Controller('responses')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Post('/respond/:signalId')
  @ApiOperation({ summary: 'Send a response to the signal creator' })
  @ApiParam({ name: 'signalId', description: 'Signal ID' })
  @ApiBody({
    type: CreateResponseDto,
    examples: {
      example1: {
        value: {
          userId: 1,
          message:
            'Hi! I just finished watering your plant, it seemed to have dried up a bit.',
        },
        summary: 'Example of sending a response',
      },
    },
  })
  @ApiCreatedResponse({
    description: 'Response successfully sent',
    example: {
      id: 1,
      signalId: 3,
      userId: 1,
      message: 'I will help you with the recycling task',
      respondedAt: '2024-03-20T10:00:00Z',
      signal: {
        userId: 1,
        title: 'Help needed with recycling',
      },
    },
  })
  @ApiForbiddenResponse({
    description: 'Cannot respond to your own signal',
    example: {
      message: 'Cannot respond to your own signal',
      error: 'Forbidden',
      statusCode: 403,
    },
  })
  @ApiNotFoundResponse({
    description: 'Signal not found',
    example: {
      message: 'Signal with id 0 not found',
      error: 'Not Found',
      statusCode: 404,
    },
  })
  respondToSignal(
    @Param('signalId', ParseIntPipe) signalId: number,
    @Body() dto: CreateResponseDto,
  ) {
    return this.responseService.respondToSignal(signalId, dto);
  }

  @Get('mysignalresponses/:userId')
  @ApiOperation({ summary: 'Get all responses for a user' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiOkResponse({
    description: 'List of unread responses for the user',
    example: [
      {
        id: 1,
        signalId: 16,
        userId: 5,
        message:
          'Hi! I just finished watering your plant, it seemed to have dried up a bit.',
        respondedAt: '2025-05-10T01:30:56.269Z',
        isRead: false,
        signal: {
          title: 'help me finish my project🙄',
        },
      },
    ],
  })
  getMySignalResponses(@Param('userId', ParseIntPipe) userId: number) {
    return this.responseService.getMySignalResponses(userId);
  }

  @Patch('mark-read')
  @ApiOperation({ summary: 'Mark a response as read' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        responseId: {
          type: 'number',
          description: 'ID of the response to mark as read',
        },
      },
    },
  })
  @ApiOkResponse({
    description: 'Response successfully marked as read',
    example: {
      id: 1,
      signalId: 3,
      userId: 1,
      message: 'I will help you with the recycling task',
      respondedAt: '2024-03-20T10:00:00Z',
      isRead: true,
    },
  })
  @ApiBadRequestResponse({
    description: 'Response already marked as read',
    example: {
      message: 'Response already marked as read',
      error: 'Bad Request',
      statusCode: 400,
    },
  })
  @ApiNotFoundResponse({
    description: 'Response with id not found',
    example: {
      message: 'Response with id 0 not found',
      error: 'Not Found',
      statusCode: 404,
    },
  })
  markResponseAsRead(@Body('responseId', ParseIntPipe) responseId: number) {
    return this.responseService.markResponseAsRead(responseId);
  }
}
