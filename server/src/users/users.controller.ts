import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  BadRequestException,
  UseInterceptors,
  UploadedFiles,
  InternalServerErrorException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { changePassword } from 'src/utils/changePassword.utils';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { removeEmptyProperties } from 'src/utils/removeEmptyProperties.utils';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.usersService.create(createUserDto);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Get()
  findAll() {
    try {
      return this.usersService.findAll();
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException("Couldn't find users");
    }
  }

  @Get(':id')
  findOne(@Param('id') userId: string) {
    try {
      return this.usersService.findOne(userId);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException("Couldn't find user");
    }
  }

  @Put(':id')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'bannerImage', maxCount: 1 },
      { name: 'profileImage', maxCount: 1 },
    ]),
  )
  async update(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFiles()
    files: {
      profileImage?: Express.Multer.File[];
      bannerImage?: Express.Multer.File[];
    },
  ) {
    try {
      for (const key in files) {
        if (files[key]) {
          const response = await this.cloudinaryService.uploadImage(
            files[key][0],
          );

          updateUserDto[key] = response;
        }
      }

      const currentUser = await this.usersService.findOne(userId);

      if (!currentUser) throw new BadRequestException('User not found');

      if (
        updateUserDto.newPassword.length >= 0 &&
        updateUserDto.oldPassword.length >= 0
      ) {
        const newPass = await changePassword(
          updateUserDto.oldPassword,
          updateUserDto.newPassword,
          currentUser.password,
        );
        updateUserDto.password = newPass;
      }

      delete updateUserDto.oldPassword;
      delete updateUserDto.newPassword;

      updateUserDto = removeEmptyProperties(updateUserDto);
      return await this.usersService.update(userId, updateUserDto);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Delete(':id')
  remove(@Param('id') userId: string) {
    try {
      return this.usersService.remove(userId);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
