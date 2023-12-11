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
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { removeEmptyProperties } from 'src/utils/removeEmptyProperties.utils';
import { ModifyFavoriteDto } from './dto/modify-favorite.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

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

  @Get('username-validate/:username')
  async validateUsername(@Param('username') username: string) {
    const user = await this.usersService.findOneByUsername(username);
    if (user) {
      throw new ConflictException('Username already exists');
    }
    return 'Username available';
  }

  @Get('email-validate/:username')
  async validateEmail(@Param('username') email: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (user) {
      throw new ConflictException('Email already exists');
    }
    return 'Email available';
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

  @Get(':id/initiatives')
  findInitiatives(@Param('id') userId: string) {
    return this.usersService.findInitiativesByUserId(userId);
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

  @Put(':id/favorites')
  modifyFavorites(
    @Param('id') userId: string,
    @Body() modifyFavoriteDto: ModifyFavoriteDto,
  ) {
    try {
      return this.usersService.modifyFavorites(userId, modifyFavoriteDto);
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
    return await this.usersService.updatePassword(updatePasswordDto, userId);
  }

  @Put(':id/edit-organization')
  async updateOrganization(
    @Param('id') userId: string,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
  ) {
    try {
      return await this.usersService.updateOrganization(
        updateOrganizationDto,
        userId,
      );
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
