import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Session,
  UnauthorizedException,
  Res,
  Get,
  NotAcceptableException,
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local/local.auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req, @Session() session): Promise<any> {
    try {
      const { user } = req;
      return {
        userId: user.id,
        sessionId: session.sessionId,
        message: 'Login successful',
      };
    } catch (error) {
      console.error(error);
      throw new NotAcceptableException();
    }
  }

  @Get('/verify')
  async verify(
    @Body() body,
    @Res() res: Response,
    @Request() req,
  ): Promise<any> {
    try {
      const { sessionid } = req.headers;
      const session = await this.authService.findSessionById(sessionid);
      if (session) {
        return res.status(200).json({ verified: true });
      } else {
        throw new UnauthorizedException();
      }
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  @Get('/logout')
  async logout(@Request() req): Promise<any> {
    try {
      const { sessionid } = req.headers;
      return await this.authService.deleteSessionById(sessionid);
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
