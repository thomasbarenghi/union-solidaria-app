import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from '../../users/users.service';
import { LocalSerializer } from './local.serializer';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(
    private readonly usersService: UsersService,
    private readonly localSerializer: LocalSerializer,
    private readonly authService: AuthService,
  ) {
    super({
      usernameField: 'email',
      passReqToCallback: true,
    });
  }

  async validate(
    request: any,
    username: string,
    password: string,
  ): Promise<any> {
    try {
      const email = username.toLowerCase();
      const user = await this.authService.validateUser(email, password);

      if (!user) {
        throw new UnauthorizedException();
      }

      this.localSerializer.serializeUser(user, (err, userSerialized) => {
        if (err) {
          throw err;
        }
        request.session.user = userSerialized;
      });

      return user;
    } catch (error) {
      console.log('Error validate local', error);
    }
  }
}
