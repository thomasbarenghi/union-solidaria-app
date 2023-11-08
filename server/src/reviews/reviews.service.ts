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
import { findUser } from 'src/users/utils';
import { findInitiative } from 'src/initiatives/utils';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<Review>,
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Initiative.name) private initiativeModel: Model<Initiative>,
  ) {}
  async create(createReviewDto: CreateReviewDto) {
    const author = await findUser(createReviewDto.authorId, this.userModel);
    const initiative = await findInitiative(
      createReviewDto.initiativeId,
      this.initiativeModel,
    );
    const initiativeAuthor = await findUser(
      initiative.owner._id.toString(),
      this.userModel,
    );

    const alreadyReviewed = await this.reviewModel.findOne({
      author: author._id.toString(),
      initiative: initiative._id.toString(),
    });

    if (alreadyReviewed) throw new ConflictException('Already reviewed');

    const isPartOfInitiative = initiative.volunteers.find(
      (member) => member.user._id.toString() === author._id.toString(),
    );

    if (!isPartOfInitiative)
      throw new NotAcceptableException('You are not part of this initiative');

    delete createReviewDto.authorId;
    delete createReviewDto.initiativeId;

    const review = await this.reviewModel.create({
      ...createReviewDto,
      initiative: initiative._id,
      author: author._id,
      initiativeOwner: initiativeAuthor._id,
    });

    initiative.reviews.push(review._id);
    author.reviews.push(review._id);
    initiativeAuthor.reviews.push(review._id);
    await Promise.all([
      initiative.save(),
      author.save(),
      initiativeAuthor.save(),
    ]);
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
    const review = await this.reviewModel.findById(id).catch(() => {
      throw new NotFoundException('Review not found');
    });

    review.set(updateReviewDto);
    await review.save();

    return review;
  }

  async remove(id: string) {
    return await this.reviewModel.findByIdAndDelete(id).catch(() => {
      throw new NotFoundException('Review not found');
    });
  }
}
