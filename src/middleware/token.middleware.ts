import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  private readonly validTokens: string[] = [
    'randomToken1',
    'randomToken2',
    'randomToken3',
  ];

  private isValidToken(token: string): boolean {
    // Check if the token is in the list of valid tokens
    return this.validTokens.includes(token);
  }

  use(req: Request, res: Response, next: NextFunction) {
    // retrieve the token from the request headers
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req['token'] = token;

    next();
  }
}
