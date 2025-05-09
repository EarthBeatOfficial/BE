import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UserResponseDto } from './dto/create-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({
    type: CreateUserDto,
    description: 'User Data',
    examples: {
      example1: {
        value: {
          username: 'jeffkim',
        },
        summary: 'Example of a user creation',
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'User successfully created',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 409,
    description: 'Conflict - nickname already exists',
    example: {
      message: "This nickname 'jeffkim' already exists",
      error: 'Conflict',
      statusCode: 409,
    },
  })
  createUser(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by their id' })
  @ApiResponse({
    status: 200,
    description: 'User found',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
    example: {
      message: 'User with Id 0 not found',
      error: 'Not Found',
      statusCode: 404,
    },
  })
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }
}
