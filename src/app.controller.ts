import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('client')
  checkContentType() {
    return {
      message: 'Welcome to /client route',
    };
  }
}
