import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
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
      throw new ConflictException(
        `This nickname '${dto.username}' already exists`,
      );
    }

    return this.prisma.user.create({
      data: {
        username: dto.username,
      },
    });
  }

  async getUserById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
    });

    if (!user) {
      throw new NotFoundException(`User with Id ${id} not found`);
    }

    return user;
  }
}
