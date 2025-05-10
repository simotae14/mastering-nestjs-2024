import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

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

  @Post('route4')
  route4(@Req() req: Request) {
    return {
      contentType: req.headers['content-type'],
      message: 'This is Route4 under /client',
    };
  }
}
