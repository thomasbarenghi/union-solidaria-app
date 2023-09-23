import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import { Initiative } from 'src/initiatives/entities/initiative.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Initiative.name) private initiativeModel: Model<Initiative>,
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Post.name) private postModel: Model<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const { authorId, initiativeId, ...rest } = createPostDto;

    const initiative = await this.initiativeModel
      .findById(initiativeId)
      .catch(() => {
        throw new NotFoundException('Initiative not found');
      });

    const author = await this.userModel.findById(authorId).catch(() => {
      throw new NotFoundException('User not found');
    });
    createPostDto.author = author._id;
    createPostDto.initiative = initiative._id;
    const post = await this.postModel.create(rest).catch(() => {
      throw new BadRequestException('Unable to create post');
    });

    initiative.posts.push(post._id);
    await initiative.save();

    author.posts.push(post._id);
  }

  async findAll() {
    return await this.postModel.find().catch(() => {
      throw new BadRequestException();
    });
  }

  async findOne(id: string) {
    return await this.postModel.findById(id).catch(() => {
      throw new NotFoundException("Post doesn't exist");
    });
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    return await this.postModel
      .findByIdAndUpdate(id, updatePostDto, {
        new: true,
      })
      .catch(() => {
        throw new BadRequestException();
      });
  }

  async remove(id: string) {
    return await this.postModel.findByIdAndDelete(id).catch(() => {
      throw new NotFoundException("Post doesn't exist");
    });
  }
}
