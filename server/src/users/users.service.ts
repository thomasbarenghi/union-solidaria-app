import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  NotAcceptableException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { encryptPassword } from 'src/utils/bcrypt.utils';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const existingEmail = await this.userModel.findOne({
      email: createUserDto.email,
    });

    const existingUsername = await this.userModel.findOne({
      username: createUserDto.username,
    });

    if (existingEmail || existingUsername) {
      throw new NotAcceptableException('Email or username already exists');
    }

    createUserDto.password = await encryptPassword(createUserDto.password);
    return new this.userModel(createUserDto).save();
  }

  async findAll() {
    try {
      return await this.userModel.find();
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async findOne(id: string) {
    try {
      return await this.userModel.findById({ _id: id });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findOneByEmail(email: string) {
    try {
      return await this.userModel.findOne({ email: email });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
        new: true,
      });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async remove(id: string) {
    try {
      return await this.userModel.findOneAndDelete({ _id: id });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
