import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller()
export class AppController {
  @Get(':id')
  getId(@Param('id', ParseIntPipe) id: number) {
    return `Fetched Id: ${id}`;
  }
}
