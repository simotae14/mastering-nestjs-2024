import {
  Controller,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
} from '@nestjs/common';
import { CustomPipe } from './customPipe/customPipe';

@Controller('auth')
export class AuthController {
  @Get('register/:id')
  @UsePipes(new CustomPipe())
  getId(@Param('id') id: number) {
    return {
      data: id,
    };
  }

  @Post('register')
  @UsePipes(new ValidationPipe(), CustomPipe)
  registerUser(@Body('dob') dob: Date) {
    return {
      data: dob,
    };
  }
}
