/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ContentTypeMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const contentType = req.headers['content-type'];

    if (!contentType) {
      return res.status(400).json({
        message: 'content-type is missing',
      });
    }

    if (contentType !== 'application/json') {
      return res.status(415).json({
        message: 'Unsupported media type. Only application/json is supported',
      });
    }
    next();
  }
}
