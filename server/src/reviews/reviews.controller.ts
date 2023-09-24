import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  InternalServerErrorException,
} from '@nestjs/common';

import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    try {
      return this.reviewsService.create(createReviewDto);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        "Couldn't create review, check userId and initiativeId",
      );
    }
  }

  @Get()
  findAll() {
    try {
      return this.reviewsService.findAll();
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.reviewsService.findOne(id);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    try {
      return this.reviewsService.update(id, updateReviewDto);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.reviewsService.remove(id);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
