/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Req, Controller, Get } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get()
  getToken(@Req() req: Request) {
    const token = req['token'];
    return { message: 'Access Authorized', token };
  }

  @Get('getToken')
  checkToken(@Req() req: Request) {
    const token = req['token'];
    return { message: 'Access Authorized', token };
  }
}
