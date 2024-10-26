import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/user")
  getUser() {
    return this.appService.getUser();
  }

  @Post("/user")
  createUser(
    @Body()
    data: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
  ) {
    return this.appService.createUser(data);
  }
}
