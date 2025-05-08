import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller()
export class AppController {
  @Get(':id')
  fetchQuery(
    @Param('id') id: string,
    @Query('name') name: string,
    @Query('age') age: number,
  ) {
    return {
      Id: `${id}`,
      Name: `${name}`,
      Age: `${age}`,
    };
  }
}
