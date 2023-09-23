import {
  Injectable,
  NotAcceptableException,
  BadRequestException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/entities/user.entity';
import { Initiative } from 'src/initiatives/entities/initiative.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<Review>,
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Initiative.name) private initiativeModel: Model<Initiative>,
  ) {}
  async create(createReviewDto: CreateReviewDto) {
    const author = await this.userModel
      .findById(createReviewDto.authorId)
      .catch(() => {
        throw new NotFoundException('User not found');
      });

    const initiative = await this.initiativeModel
      .findById(createReviewDto.initiativeId)
      .catch(() => {
        throw new NotFoundException('Initiative not found');
      });

    const initiativeAuthor = await this.userModel
      .findById(initiative.owner)
      .catch(() => {
        throw new NotFoundException('Initiative author not found');
      });

    await this.reviewModel
      .findOne({
        author: author._id,
        initiative: initiative._id,
      })
      .catch(() => {
        throw new ConflictException(
          'You already made a review for this initiative',
        );
      });

    const isPartOfInitiative = initiative.volunteers.find(
      (member) => member.user.toString() === author._id.toString(),
    );

    if (!isPartOfInitiative)
      throw new NotAcceptableException('You are not part of this initiative');

    delete createReviewDto.authorId;
    delete createReviewDto.initiativeId;

    const review = await this.reviewModel.create({
      ...createReviewDto,
      initiative: initiative._id,
      author: author._id,
    });

    initiative.reviews.push(initiative._id);
    author.reviews.push(review._id);
    initiativeAuthor.reviews.push(review._id);

    await initiative.save();
    await author.save();
    await initiativeAuthor.save();

    return review;
  }

  async findAll() {
    return await this.reviewModel.find().catch(() => {
      throw new BadRequestException();
    });
  }

  async findOne(id: string) {
    return await this.reviewModel.findById({ _id: id }).catch(() => {
      throw new NotFoundException('Review not found');
    });
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    return await this.reviewModel.findByIdAndUpdate(id, updateReviewDto);
  }

  async remove(id: string) {
    return await this.reviewModel.findByIdAndDelete(id).catch(() => {
      throw new NotFoundException('Review not found');
    });
  }
}
