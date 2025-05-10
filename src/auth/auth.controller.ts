import { Controller, Body, Post, UsePipes } from '@nestjs/common';
import { AuthDto } from './authDto';
import { PhoneAuth } from './customPipe/phoneAuth';

@Controller('auth')
export class AuthController {
  @Post('register')
  @UsePipes(PhoneAuth)
  registerUser(@Body() userData: AuthDto) {
    return {
      data: userData,
    };
  }
}
