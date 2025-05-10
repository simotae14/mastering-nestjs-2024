import { Controller, Get } from '@nestjs/common';

@Controller('client')
export class AppController {
  @Get('route1')
  route1() {
    return {
      message: 'This is Route1 under /client',
    };
  }

  @Get('route2')
  route2() {
    return {
      message: 'This is Route2 under /client',
    };
  }

  @Get('route3')
  route3() {
    return {
      message: 'This is Route3 under /client',
    };
  }
}
