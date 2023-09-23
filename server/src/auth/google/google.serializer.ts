import { UsersService } from '../../users/users.service';
import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class GoogleSerializer extends PassportSerializer {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  serializeUser(user: User, done: CallableFunction) {
    done(null, {
      userId: user._id,
      email: user.email,
      provider: 'google',
    });
  }

  async deserializeUser(userId: string, done: CallableFunction) {
    const user = await this.usersService.findOne(userId);
    done(null, {
      userId: user.id,
      email: user.email,
      provider: 'google',
    });
  }
}
