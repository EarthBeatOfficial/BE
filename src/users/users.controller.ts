import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
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
          username: "jeffkim",
        },
        summary: 'Example of a user creation'
      }
    }
  })
  @ApiResponse({ 
    status: 201, 
    description: 'User successfully created',
    type: UserResponseDto,
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Bad Request - Invalid input data' 
  })
  createUser(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  @Get(':username')
  @ApiOperation({ summary: 'Get user by their username' })
  @ApiResponse({ 
    status: 200, 
    description: 'User found',
    type: UserResponseDto,
  })
  @ApiResponse({ 
    status: 404, 
    description: 'User not found' 
  })
  getUserByUsername(@Param('username') username: string) {
    return this.usersService.getUserByUsername(username);
  }
} 