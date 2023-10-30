import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { encryptPassword } from 'src/utils/bcrypt.utils';
import { Initiative } from 'src/initiatives/entities/initiative.entity';
import { ModifyFavoriteDto } from './dto/modify-favorite.dto';
import { checkUniqueEmail, checkUniqueUsername, findUser } from './utils';
import { findInitiative } from 'src/initiatives/utils';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Initiative.name) private initiativeModel: Model<Initiative>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    await checkUniqueEmail(createUserDto.email, this.userModel);
    await checkUniqueUsername(createUserDto.username, this.userModel);
    createUserDto.password = await encryptPassword(createUserDto.password);
    return await new this.userModel(createUserDto).save();
  }

  async findAll() {
    return await this.userModel.find().catch(() => {
      throw new BadRequestException();
    });
  }

  async findOne(id: string) {
    return await findUser(id, this.userModel);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await findUser(id, this.userModel);
    if (updateUserDto.newPassword && updateUserDto.oldPassword) {
      const isMatch = await user.comparePassword(updateUserDto.oldPassword);
      if (!isMatch) {
        throw new BadRequestException('Incorrect password');
      }
      updateUserDto.password = await encryptPassword(updateUserDto.newPassword);
      delete updateUserDto.oldPassword;
      delete updateUserDto.newPassword;
    }

    if (updateUserDto.email) {
      await checkUniqueEmail(updateUserDto.email, this.userModel);
    }

    if (updateUserDto.username) {
      await checkUniqueUsername(updateUserDto.username, this.userModel);
    }

    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.userModel.findOneAndDelete({ _id: id }).catch(() => {
      throw new NotFoundException("User doesn't exist");
    });
  }

  async modifyFavorites(modifyFavoriteDto: ModifyFavoriteDto) {
    const { userId, initiativeId } = modifyFavoriteDto;
    const user = await findUser(userId, this.userModel);
    const initiative = await findInitiative(initiativeId, this.initiativeModel);

    const existingFavorite = user.favorites.find(
      (favorite) => favorite.toString() === initiative._id.toString(),
    );

    if (existingFavorite) {
      user.favorites = user.favorites.filter(
        (favorite) => favorite.toString() !== initiative._id.toString(),
      );
    } else {
      user.favorites.push(initiative._id);
    }

    await user.save();

    return {
      message: `Initiative ${initiative.title} ${
        existingFavorite ? 'removed from' : 'added to'
      } favorites`,
    };
  }
}
