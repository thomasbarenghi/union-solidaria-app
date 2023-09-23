import { Injectable, NotAcceptableException } from '@nestjs/common';
import { comparePasswords } from '../utils/bcrypt.utils';
import { UsersService } from 'src/users/users.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Session } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    @InjectModel(Session.name) private authModel: Model<Session>,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(username);

    if (!user) {
      throw new NotAcceptableException('Could not find the user');
    }

    const passwordValid = await comparePasswords(password, user.password);

    if (!passwordValid) {
      throw new NotAcceptableException('Invalid password');
    }

    return {
      id: user.id,
      email: user.email,
    };
  }

  async findSessionById(sessionId: string) {
    try {
      const session = await this.authModel.findOne({
        session: {
          sessionId: sessionId,
        },
      });

      if (!session) return null;

      const tediousObject = session[0] as object;
      const stringTediousObject = JSON.stringify(tediousObject);
      const jsonResponse = JSON.parse(stringTediousObject);

      return jsonResponse.session.sessionId === sessionId;
    } catch (error) {
      console.log('Error findSessionById', error);
      throw new Error('Error while fetching sessions: ' + error.message);
    }
  }
}
