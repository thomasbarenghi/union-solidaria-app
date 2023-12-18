import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Response, Request, NextFunction } from 'express';
import { AuthService } from './auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const { sessionid } = req.headers;
      const session = await this.authService.findSessionById(
        sessionid as string,
      );
      if (session) {
        next();
      } else {
        throw new UnauthorizedException('Invalid session');
      }
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('Invalid session or server error');
    }
  }
}
