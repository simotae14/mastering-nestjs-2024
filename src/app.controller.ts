import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @HttpCode(HttpStatus.BAD_GATEWAY)
  getAll() {
    return {
      status: HttpStatus.BAD_GATEWAY,
    };
  }
}
