/* eslint-disable @typescript-eslint/no-unsafe-return */
import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PhoneAuth implements PipeTransform {
  transform(value: any) {
    const phoneNumber = String(value.phone);
    const regex = /^\d{10,11}$/;

    if (!regex.test(phoneNumber)) {
      throw new BadRequestException(
        'Phone number must be exactly 10 or 11 digits',
      );
    }

    return value;
  }
}
