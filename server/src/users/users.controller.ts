import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseInterceptors,
  UploadedFiles,
  InternalServerErrorException
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { removeEmptyProperties } from 'src/utils/removeEmptyProperties.utils';
import { ModifyFavoriteDto } from './dto/modify-favorite.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

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

  @Put('favorites')
  modifyFavorites(@Body() modifyFavoriteDto: ModifyFavoriteDto) {
    try {
      return this.usersService.modifyFavorites(modifyFavoriteDto);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Put(':id/edit-password')
  async updatePassword(
    @Param('id') userId: string,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ) {
    try {
      return await this.usersService.updatePassword(updatePasswordDto, userId);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
