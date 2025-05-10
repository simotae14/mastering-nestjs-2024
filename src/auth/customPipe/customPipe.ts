/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class CustomPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.metatype === Date) {
      value = new Date(value);
      if (isNaN(value.getTime())) {
        throw new BadRequestException('Invalid date format');
      }
      value = value.toUTCString();
    }

    if (metadata.type === 'body' && metadata.data === 'name') {
      value = value.toUpperCase();
    } else if (metadata.type === 'param') {
      const idLength = parseInt(value as string, 10);
      if (!isNaN(idLength) && idLength > 0) {
        const randomId = Math.floor(Math.random() * Math.pow(10, idLength));
        value = randomId;
      }
    }
    console.log(metadata.data);
    return value;
  }
}
