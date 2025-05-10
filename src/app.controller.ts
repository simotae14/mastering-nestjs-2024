import { Controller, Get, HttpCode, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  @HttpCode(204)
  getAll(@Res() res: Response) {
    return res.status(200).json({
      msg: 'This is string message',
    });
  }
}
