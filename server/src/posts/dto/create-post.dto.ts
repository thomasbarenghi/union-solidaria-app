import { OmitType } from '@nestjs/mapped-types';
import { Post } from '../entities/post.entity';

export class CreatePostDto extends OmitType(Post, [
  '_id',
] as const) {
  authorId: string;
  initiativeId: string;
}
