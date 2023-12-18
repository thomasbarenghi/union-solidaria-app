import { Injectable, NotAcceptableException } from '@nestjs/common';
import { comparePasswords, encryptPassword } from '../utils/bcrypt.utils';
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
    const user = await this.usersService.findOne(username);
    await comparePasswords(password, user.password);
    return {
      id: user.id,
      email: user.email,
    };
  }

  async findSessionById(sessionId: string) {
    try {
      const session = await this.authModel.find({
        'session.sessionId': sessionId,
      });
      if (!session) return null;
      const parsedSessionId = JSON.parse(JSON.stringify(session[0])).session
        .sessionId;
      return parsedSessionId === sessionId;
    } catch (error) {
      console.error('Error findSessionById', error);
      throw new Error('Error while fetching sessions: ' + error.message);
    }
  }

  async deleteSessionById(sessionId: string) {
    await this.authModel.deleteOne({
      'session.sessionId': sessionId,
    });
    return {
      message: 'Logout successful',
    };
  }
}
