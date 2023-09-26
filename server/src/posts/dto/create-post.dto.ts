import { OmitType } from '@nestjs/mapped-types';
import { Post } from '../entities/post.entity';
import { IsNotEmpty } from 'class-validator';

export class CreatePostDto extends OmitType(Post, [
  '_id',
] as const) {
  @IsNotEmpty({ message: 'authorId is required' })
  authorId: string;

  @IsNotEmpty({ message: 'initiativeId is required' })
  initiativeId: string;
}
