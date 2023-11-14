import { OmitType } from '@nestjs/mapped-types';
import { Review } from '../entities/review.entity';

export class UpdateReviewDto extends OmitType(Review, [
  '_id',
  'author',
  'initiative',
  'createdAt',
  'initiativeOwner',
  'updatedAt',
] as const) {}
