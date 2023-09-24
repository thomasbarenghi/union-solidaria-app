import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { encryptPassword } from 'src/utils/bcrypt.utils';
import { populateUser } from 'src/constants/populateUser.const';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const email = await this.userModel.findOne({
      email: createUserDto.email,
    });

    if (email) throw new ConflictException('Email already exists');

    const username = await this.userModel.findOne({
      username: createUserDto.username,
    });

    if (username) throw new ConflictException('Username already exists');

    createUserDto.password = await encryptPassword(createUserDto.password);
    return await new this.userModel(createUserDto).save();
  }

  async findAll() {
    return await this.userModel.find().catch(() => {
      throw new BadRequestException();
    });
  }

  async findOne(id: string) {
    const idPattern = /^[0-9a-f]{24}$/i;
    if (id && idPattern.test(id)) {
      return await this.userModel
        .findById(id)
        .populate(populateUser(true, true))
        .catch(() => {
          throw new NotFoundException("User doesn't exist");
        });
    } else {
      console.log('username');
      const user = await this.userModel.findOne({ username: id }).populate(populateUser(true, true));

      if (!user) throw new NotFoundException("User doesn't exist");
      return user;
    }
  }

  async findOneByEmail(email: string) {
    return await this.userModel.findOne({ email: email });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.userModel.findOneAndDelete({ _id: id }).catch(() => {
      throw new NotFoundException("User doesn't exist");
    });
  }
}
