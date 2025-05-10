import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';

@Controller()
export class AppController {
  @Get(':id')
  getId(
    @Param(
      'id',
      new ParseUUIDPipe({
        version: '4',
      }),
    )
    id: string,
  ) {
    return `Id retrieved: ${id}`;
  }
}
