import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';

@Controller()
export class AppController {
  @Get(':id')
  getId(@Param('id', ParseFloatPipe) id: number) {
    return `Fetched Id: ${id}`;
  }
}
