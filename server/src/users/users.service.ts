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
import { encryptPassword, comparePasswords } from 'src/utils/bcrypt.utils';
import { Initiative } from 'src/initiatives/entities/initiative.entity';
import { ModifyFavoriteDto } from './dto/modify-favorite.dto';
import { checkUniqueEmail, checkUniqueUsername, findUser } from './utils';
import { findInitiative } from 'src/initiatives/utils';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

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
    createUserDto.email = createUserDto.email.toLowerCase();
    return await new this.userModel(createUserDto).save();
  }

  async findInitiativesByUserId(userId: string) {
    const initiatives = await this.initiativeModel.find({
      owner: userId,
    });

    return initiatives;
  }

  async findAll() {
    return await this.userModel.find().catch(() => {
      throw new BadRequestException();
    });
  }

  async findOne(id: string) {
    return await findUser(id, this.userModel);
  }

  async findOneByUsername(username: string) {
    return await this.userModel.findOne({ username: username });
  }

  async findOneByEmail(email: string) {
    return await this.userModel.findOne({ email: email });
  }

  async updatePassword(updatePasswordDto: UpdatePasswordDto, userId: string) {
    const user = await findUser(userId, this.userModel);
    const isMatch = await comparePasswords(
      updatePasswordDto.oldPassword,
      user.password,
    );
    if (!isMatch) {
      throw new BadRequestException('Incorrect password');
    }
    user.password = await encryptPassword(updatePasswordDto.newPassword);
    await user.save();
    return {
      message: 'Password updated',
    };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.email) {
      updateUserDto.email = updateUserDto.email.toLowerCase();
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

  async modifyFavorites(userId: string, modifyFavoriteDto: ModifyFavoriteDto) {
    const { initiativeId } = modifyFavoriteDto;
    const user = await findUser(userId, this.userModel);
    const initiative = await findInitiative(initiativeId, this.initiativeModel);

    const existingFavorite = user.favorites.find(
      (favorite) => favorite._id.toString() === initiative._id.toString(),
    );

    if (existingFavorite) {
      user.favorites = user.favorites.filter(
        (favorite) => favorite._id.toString() !== initiative._id.toString(),
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

  async updateOrganization(
    updateOrganizationDto: UpdateOrganizationDto,
    userId: string,
  ) {
    const user = await findUser(userId, this.userModel);
    if (user.role !== 'organization') {
      throw new ConflictException('User is not an organization');
    }
    user.orgName = updateOrganizationDto.orgName;
    await user.save();
    return {
      message: 'Organization updated',
    };
  }
}
