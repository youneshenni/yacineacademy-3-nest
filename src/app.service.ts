import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  getHello(): string {
    return "Hello World!";
  }

  getUser() {
    return this.prismaService.user.findMany();
  }

  createUser(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    return this.prismaService.user.create({ data });
  }
}
