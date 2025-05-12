import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(dto: CreateUserDto) {
    const existingUser = await this.usersRepository.getUserByUsername(dto.username);

    if (existingUser) {
      throw new ConflictException(
        `This nickname '${dto.username}' already exists`,
      );
    }

    return this.usersRepository.createUser(dto);
  }

  async getUserById(id: number) {
    const user = await this.usersRepository.getUserById(id);

    if (!user) {
      throw new NotFoundException(`User with Id ${id} not found`);
    }

    return user;
  }
}
