import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(dto: CreateUserDto) {
    // Check if username already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { username: dto.username },
    });

    if (existingUser) {
      throw new ConflictException(`This nickname '${dto.username}' already exists`);
    }

    return this.prisma.user.create({
      data: {
        username: dto.username,
      },
    });
  }

  async getUserByNickname(nickname: string) {
    const user = await this.prisma.user.findUnique({
      where: { username: nickname },
    });

    if (!user) {
      throw new NotFoundException(`User with nickname ${nickname} not found`);
    }

    return user;
  }
} 