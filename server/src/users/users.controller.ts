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
  UploadedFile,
  UploadedFiles,
  InternalServerErrorException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { changePassword } from 'src/utils/changePassword.utils';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { removeEmptyProperties } from 'src/utils/removeEmptyProperties.utils';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.create(createUserDto);
    } catch (error) {
      console.log('error', error);
      throw new InternalServerErrorException();
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') userId: string) {
    try {
      return await this.usersService.findOne(userId);
    } catch (error) {
      console.log('error', error);
      throw new InternalServerErrorException();
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
          const response = await this.cloudinaryService
            .uploadImage(files[key][0])
            .catch(() => {
              throw new BadRequestException('Invalid file type.');
            });
          updateUserDto[key] = response.secure_url;
        }
      }

      const currentUser = await this.usersService.findOne(userId);
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
      console.log('error', error);
      throw new InternalServerErrorException();
    }
  }

  @Delete(':id')
  async remove(@Param('id') userId: string) {
    try {
      await this.usersService.remove(userId);
      return { message: 'User correctly deleted' };
    } catch (error) {
      console.log('error', error);
      throw new InternalServerErrorException();
    }
  }

  @Post('/testImageUpload')
  @UseInterceptors(FileInterceptor('profileImage'))
  async testImageUpload(
    @Body() body,
    @UploadedFile() profileImage: Express.Multer.File,
  ) {
    console.log('file', profileImage);
    const response = await this.cloudinaryService
      .uploadImage(profileImage)
      .catch((error) => {
        console.log('cloudinaryService', error);
        throw new BadRequestException('Invalid file type.');
      });

    console.log('Final url', response.secure_url);
    return;
  }
}
