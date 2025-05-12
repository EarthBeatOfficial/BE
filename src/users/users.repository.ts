import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(dto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        username: dto.username,
      },
    });
  }

  async getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async getUserByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }
}
