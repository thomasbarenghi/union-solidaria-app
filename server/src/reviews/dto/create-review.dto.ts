import { OmitType } from '@nestjs/mapped-types';
import { Review } from '../entities/review.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateReviewDto extends OmitType(Review, [
  '_id',
  'author',
  'initiative',
] as const) {
  @IsNotEmpty({ message: 'authorId is required' })
  authorId: string;

  @IsNotEmpty({ message: 'initiativeId is required' })
  initiativeId: string;
}
