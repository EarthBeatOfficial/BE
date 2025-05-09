import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user through this endpoint' })
  @ApiBody({
    type: CreateUserDto,
    description: 'User Data',
    examples: {
      example1: {
        value: {
          username: "jeffkim"
        },
        summary: 'Example of a user creation'
      }
    }
  })
  @ApiResponse({ 
    status: 201, 
    description: 'User successfully created',
    type: CreateUserDto
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Bad Request - Invalid input data' 
  })
  createUser(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  @Get('nickname')
  @ApiOperation({ summary: 'Get user by their nickname' })
  @ApiResponse({ 
    status: 200, 
    description: 'User found',
    type: CreateUserDto
  })
  @ApiResponse({ 
    status: 404, 
    description: 'User not found' 
  })
  getUserByUsername(@Param('username') username: string) {
    return this.usersService.getUserByUsername(username);
  }
} 