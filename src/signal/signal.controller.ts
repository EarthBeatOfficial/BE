import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { SignalService } from './signal.service';
import { CreateSignalDto } from './dto/create-signal.dto';
import { SignalResponseDto } from './dto/signal-response.dto';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@ApiTags('Signals')
@Controller('signals')
export class SignalController {
  constructor(private readonly signalService: SignalService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new signal' })
  @ApiBody({
    type: CreateSignalDto,
    examples: {
      example1: {
        value: {
          userId: 1,
          title: 'Help needed with recycling',
          description: 'Need help sorting recyclables at the community center',
          lat: 37.5665,
          lng: 126.978,
          timeLimit: 30,
          categoryId: 1,
        },
        summary: 'Example of creating a signal',
      },
    },
  })
  @ApiCreatedResponse({
    description: 'Signal successfully created',
    type: SignalResponseDto,
    examples: {
      example1: {
        value: {
          id: 1,
          userId: 1,
          categoryId: 1,
          title: 'Help needed with recycling',
          description: 'Need help sorting recyclables at the community center',
          lat: 37.5665,
          lng: 126.978,
          createdAt: '2024-03-20T10:00:00Z',
          timeLimit: 30,
          status: 'PENDING',
          selectedUserId: null,
          expiresAt: '2024-03-20T10:30:00Z',
          category: {
            id: 1,
            name: 'Water Plants / Plant - Related',
          },
        },
        summary: 'Example of a signal creation',
      },
    },
  })
  create(
    @Body('userId') userId: number,
    @Body() createSignalDto: CreateSignalDto,
  ) {
    return this.signalService.createSignal(userId, createSignalDto);
  }

  @Patch(':id/accept')
  @ApiOperation({ summary: 'Accept a signal to respond to' })
  @ApiParam({ name: 'id', description: 'Signal ID' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        userId: {
          type: 'number',
          description: 'ID of the user selecting the signal',
        },
      },
    },
  })
  @ApiOkResponse({
    description: 'Signal successfully accepted',
    example: {
      id: 3,
      userId: 1,
      categoryId: 5,
      title: 'Help needed with recycling',
      description: 'Need help sorting recyclables at the community center',
      lat: 37.5665,
      lng: 126.978,
      createdAt: '2025-05-09T13:32:04.142Z',
      timeLimit: 30,
      status: 'IN_PROGRESS',
      selectedUserId: 5,
      expiresAt: '2025-05-09T14:02:04.140Z',
    },
  })
  @ApiForbiddenResponse({
    description: 'Cannot accept your own signal',
    example: {
      message: 'Cannot accept your own signal',
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
  acceptSignal(
    @Param('id', ParseIntPipe) id: number,
    @Body('userId') userId: number,
  ) {
    return this.signalService.acceptSignal(id, userId);
  }

  @Patch(':id/cancel')
  @ApiOperation({ summary: 'Cancel a accepted signal' })
  @ApiParam({ name: 'id', description: 'Signal id' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        userId: {
          type: 'number',
          description: 'ID of the user canceling the signal',
        },
      },
    },
  })
  @ApiOkResponse({
    description: 'Signal successfully canceled',
    example: {
      id: 3,
      userId: 1,
      categoryId: 5,
      title: 'Help needed with recycling',
      description: 'Need help sorting recyclables at the community center',
      lat: 37.5665,
      lng: 126.978,
      createdAt: '2025-05-09T13:32:04.142Z',
      timeLimit: 30,
      status: 'PENDING',
      selectedUserId: null,
      expiresAt: '2025-05-09T14:02:04.140Z',
    },
  })
  @ApiForbiddenResponse({
    description: 'You are not the user who selected this signal',
    example: {
      message: 'You are not the user who selected this signal',
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
  cancelSignal(
    @Param('id', ParseIntPipe) id: number,
    @Body('userId') userId: number,
  ) {
    return this.signalService.cancelSignal(id, userId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a signal' })
  @ApiParam({ name: 'id', description: 'Signal ID' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        userId: {
          type: 'number',
          description: 'ID of the user deleting the signal',
        },
      },
    },
  })
  @ApiOkResponse({
    description: 'Signal successfully deleted',
    example: {
      id: 3,
      userId: 1,
      categoryId: 5,
      title: 'Help needed with recycling',
      description: 'Need help sorting recyclables at the community center',
      lat: 37.5665,
      lng: 126.978,
      createdAt: '2025-05-09T13:32:04.142Z',
      timeLimit: 30,
      status: 'PENDING',
      selectedUserId: null,
      expiresAt: '2025-05-09T14:02:04.140Z',
    },
  })
  @ApiBadRequestResponse({
    description: 'Signal is not available for deletion',
    example: {
      message: 'Signal is not available for deletion since it is not pending',
      error: 'Bad Request',
      statusCode: 400,
    },
  })
  @ApiForbiddenResponse({
    description: 'Not authorized to delete this signal',
    example: {
      message: 'Only the creator can delete this signal',
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
  deleteSignal(
    @Param('id', ParseIntPipe) id: number,
    @Body('userId') userId: number,
  ) {
    return this.signalService.deleteSignal(id, userId);
  }

  @Get('active')
  @ApiOperation({ summary: 'Get all active signals' })
  @ApiOkResponse({
    description: 'List of active signals',
    isArray: true,
    example: [
      {
        id: 1,
        userId: 1,
        categoryId: 1,
        title: 'Help needed with recycling',
        description: 'Need help sorting recyclables at the community center',
        lat: 37.5665,
        lng: 126.978,
        createdAt: '2025-05-09T13:32:04.142Z',
        timeLimit: 30,
        status: 'PENDING',
        selectedUserId: null,
        expiresAt: '2025-05-09T14:02:04.140Z',
      },
      {
        id: 2,
        userId: 2,
        categoryId: 2,
        title: 'Help needed with watering plants',
        description: 'Need help watering plants at the community center',
        lat: 37.5665,
        lng: 126.978,
        createdAt: '2025-05-09T13:32:04.142Z',
        timeLimit: 30,
        status: 'PENDING',
        selectedUserId: null,
        expiresAt: '2025-05-09T14:02:04.140Z',
      },
    ],
  })
  getActiveSignals() {
    return this.signalService.getActiveSignals();
  }

  @Get('mysignals/:userId')
  @ApiOperation({ summary: 'Get all of my current signals' })
  @ApiParam({ name: 'userId', description: 'User id' })
  @ApiOkResponse({
    description: 'List of my current signals',
    isArray: true,
    example: [
      {
        id: 3,
        userId: 5,
        categoryId: 5,
        title: 'Help needed with recycling',
        description: 'Need help sorting recyclables at the community center',
        lat: 37.5665,
        lng: 126.978,
        createdAt: '2025-05-09T13:32:04.142Z',
        timeLimit: 30,
        status: 'PENDING',
        selectedUserId: 1,
        expiresAt: '2025-05-09T14:02:04.140Z',
      },
      {
        id: 3,
        userId: 5,
        categoryId: 5,
        title: 'Help needed with recycling',
        description: 'Need help sorting recyclables at the community center',
        lat: 37.5665,
        lng: 126.978,
        createdAt: '2025-05-09T13:32:04.142Z',
        timeLimit: 30,
        status: 'PENDING',
        selectedUserId: 1,
        expiresAt: '2025-05-09T14:02:04.140Z',
      },
    ],
  })
  getMySignals(@Param('userId', ParseIntPipe) userId: number) {
    return this.signalService.getMySignals(userId);
  }
}
