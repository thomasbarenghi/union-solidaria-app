import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Query,
  Put,
  InternalServerErrorException,
} from '@nestjs/common';
import { InitiativesService } from './initiatives.service';
import { CreateInitiativeDto } from './dto/create-initiative.dto';
import { UpdateInitiativeDto } from './dto/update-initiative.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { convertToArray } from 'src/utils/convertToArray.utils';
import { UpdateSubscriptionStatusDto } from './dto/update-subscription-status.dto';
import { SubscribeUserToInitiativeDto } from './dto/subscribe-user-to-initiative.dto';
import { UnsubscribeUserToInitiativeDto } from './dto/unsubscribe-user-from-initiative.dto';

@Controller('initiatives')
export class InitiativesController {
  constructor(
    private readonly initiativesService: InitiativesService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('thumbnail'))
  async create(
    @Body() createInitiativeDto: CreateInitiativeDto,
    @UploadedFile() thumbnail: Express.Multer.File,
  ) {
    try {
      if (thumbnail) {
        createInitiativeDto.thumbnail =
          await this.cloudinaryService.uploadImage(thumbnail);
      }

      createInitiativeDto.themes = convertToArray(createInitiativeDto.themes);
      createInitiativeDto.opportunities = convertToArray(
        createInitiativeDto.opportunities,
      );

      return this.initiativesService.create(createInitiativeDto);
    } catch (error) {
      console.error(error);
    }
  }

  @Get()
  findAll(
    @Query('country') country: string,
    @Query('province') province: string,
    @Query('title') title: string,
    @Query('themes') themes: string,
    @Query('opportunities') opportunities: string,
  ) {
    try {
      return this.initiativesService.findAll(
        country,
        province,
        title,
        themes,
        opportunities,
      );
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.initiativesService.findOne(id);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('thumbnail'))
  async update(
    @Param('id') id: string,
    @Body() updateInitiativeDto: UpdateInitiativeDto,
    @UploadedFile() thumbnail: Express.Multer.File,
  ) {
    try {
      if (thumbnail) {
        updateInitiativeDto.thumbnail =
          await this.cloudinaryService.uploadImage(thumbnail);
      }

      return this.initiativesService.update(id, updateInitiativeDto);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.initiativesService.remove(id);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Put(':id/subscribe')
  subscribeUserToInitiative(
    @Param('id') id: string,
    @Body() subscribeUserToInitiativeDto: SubscribeUserToInitiativeDto,
  ) {
    try {
      return this.initiativesService.subscribeUserToInitiative(
        subscribeUserToInitiativeDto,
        id,
      );
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Put(':id/subscription-status')
  updateSubscriptionStatus(
    @Param('id') id: string,
    @Body() updateSubscriptionStatusDto: UpdateSubscriptionStatusDto,
  ) {
    try {
      return this.initiativesService.updateSubscriptionStatus(
        id,
        updateSubscriptionStatusDto,
      );
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Put(':id/unsubscribe')
  unsubscribeUserFromInitiative(
    @Param('id') id: string,
    @Body() unsubscribeUserFromInitiativeDto: UnsubscribeUserToInitiativeDto,
  ) {
    try {
      return this.initiativesService.unsubscribeUserFromInitiative(
        unsubscribeUserFromInitiativeDto,
        id,
      );
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
