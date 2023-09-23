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
  Redirect,
  NotAcceptableException,
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local/local.auth.guard';
import { Response } from 'express';
import { GoogleOauthGuard } from './google/google-oauth.guard';

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
      console.log('error', error);
      throw new NotAcceptableException();
    }
  }

  @Get('/google')
  @UseGuards(GoogleOauthGuard)
  async googleAuth() {
    return;
  }

  @Get('/google/callback')
  @UseGuards(GoogleOauthGuard)
  @Redirect()
  async googleAuthRedirect(
    @Session() session,
    @Request() req,
  ) {
    try {
      const { session, user } = req;

      const slug = session.redirectURL ?? process.env.GOOGLE_DEFAULT_REDIRECT;

      delete req.session.redirectURL;
      const url = user
        ? `${process.env.CLIENT_URL}/${slug}?userId=${user.id}&sessionId=${session.sessionId}`
        : `${process.env.CLIENT_URL}/login?failed=true`;
      return { url };
    } catch (error) {
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
  async logout(@Res() res: Response): Promise<any> {
    try {
      return res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
