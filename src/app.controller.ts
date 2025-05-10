import { Controller, Get, ParseBoolPipe, Query } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getVal(@Query('isActive', ParseBoolPipe) isActive: boolean) {
    if (isActive) {
      return 'Welcome Admin';
    } else {
      return 'Welcome User';
    }
  }
}
