import { NotFoundException } from '@nestjs/common';
import { Post } from './entities/post.entity';
import { Model } from 'mongoose';

export const findPost = async (id: string, postModel: Model<Post>) => {
  const post = await postModel.findById(id).catch(() => {
    throw new NotFoundException("Post doesn't exist");
  });

  if (!post) throw new NotFoundException("Post doesn't exist");

  return post;
};
