import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  Query,
} from '@nestjs/common';
import { InitiativesService } from './initiatives.service';
import { CreateInitiativeDto } from './dto/create-initiative.dto';
import { UpdateInitiativeDto } from './dto/update-initiative.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { convertToArray } from 'src/utils/convertToArray.utils';

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
        const response = await this.cloudinaryService
          .uploadImage(thumbnail)
          .catch(() => {
            throw new BadRequestException('Invalid file type.');
          });
        createInitiativeDto.thumbnail = response.secure_url;
      }

      createInitiativeDto.themes = convertToArray(createInitiativeDto.themes);
      createInitiativeDto.opportunities = convertToArray(
        createInitiativeDto.opportunities,
      );

      return this.initiativesService.create(createInitiativeDto);
    } catch (error) {
      console.log(error);
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
    return this.initiativesService.findAll(
      country,
      province,
      title,
      themes,
      opportunities,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.initiativesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInitiativeDto: UpdateInitiativeDto,
  ) {
    return this.initiativesService.update(id, updateInitiativeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.initiativesService.remove(id);
  }
}
