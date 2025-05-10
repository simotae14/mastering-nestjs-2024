/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CustomPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'param' && typeof value === 'string') {
      value = value.toUpperCase();
    }

    return value;
  }
}
