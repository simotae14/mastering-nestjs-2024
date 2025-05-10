import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Post()
  createMsg(@Body() msg: string) {
    console.log(msg);
    return 'Message received successfully';
  }
}
