import {
  Controller,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomPipe } from './customPipe/customPipe';

@Controller('auth')
export class AuthController {
  @Post('register')
  @UsePipes(new ValidationPipe(), CustomPipe)
  registerUser(@Body('name') name: string) {
    return {
      data: name,
    };
  }
}
