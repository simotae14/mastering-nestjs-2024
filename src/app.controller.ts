import { Controller, Get, ParseArrayPipe, Query } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getVal(
    @Query(
      'num',
      new ParseArrayPipe({
        items: Number,
      }),
    )
    num: number[],
  ) {
    return num;
  }
}
