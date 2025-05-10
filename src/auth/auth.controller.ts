import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthDto } from './authDto';

@Controller('auth')
export class AuthController {
  @Post('register')
  @UsePipes(ValidationPipe)
  registerUser(@Body() userData: AuthDto) {
    return {
      Name: `${userData.name}`,
      Email: `${userData.email}`,
      Country: `${userData.country}`,
      dob: `${userData.dob}`,
      phone: `${userData.phone}`,
    };
  }
}
