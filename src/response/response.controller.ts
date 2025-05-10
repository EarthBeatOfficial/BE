import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  ParseIntPipe,
  ForbiddenException,
} from '@nestjs/common';
import { ResponseService } from './response.service';
import { CreateResponseDto } from './dto/create-response.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
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
  @ApiResponse({
    status: 201,
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
  @ApiResponse({
    status: 403,
    description: 'Cannot respond to your own signal',
    example: {
      message: 'Cannot respond to your own signal',
      error: 'Forbidden',
      statusCode: 403,
    },
  })
  @ApiResponse({
    status: 404,
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

  @Get(':signalId')
  @ApiOperation({ summary: 'Get all responses for a signal' })
  @ApiParam({ name: 'signalId', description: 'Signal ID' })
  @ApiResponse({
    status: 200,
    description: 'List of responses for the signal',
    isArray: true,
    example: [
      {
        id: 1,
        signalId: 3,
        userId: 1,
        message:
          'Hi! I just finished watering your plant, it seemed to have dried up a bit.',
        respondedAt: '2024-03-20T10:00:00Z',
        user: {
          id: 1,
          username: 'john_doe',
        },
      },
    ],
  })
  @ApiResponse({
    status: 404,
    description: 'Signal not found',
    example: {
      message: 'Signal with id 0 not found',
      error: 'Not Found',
      statusCode: 404,
    },
  })
  getSignalResponses(@Param('signalId', ParseIntPipe) signalId: number) {
    return this.responseService.getSignalResponses(signalId);
  }
}
