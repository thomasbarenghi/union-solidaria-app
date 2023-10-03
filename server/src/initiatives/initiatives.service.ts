import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateInitiativeDto } from './dto/create-initiative.dto';
import { UpdateInitiativeDto } from './dto/update-initiative.dto';
import { buildQueryInitiative } from 'src/utils/initiativeFilter.utils';
import { InjectModel } from '@nestjs/mongoose';
import { Initiative } from './entities/initiative.entity';
import { Model } from 'mongoose';
import { UpdateSubscriptionStatusDto } from './dto/update-subscription-status.dto';
import { SubscribeUserToInitiativeDto } from './dto/subscribe-user-to-initiative.dto';
import { User } from 'src/users/entities/user.entity';
import { populateInitiative } from 'src/constants/populateInitiative.const';
import { UnsubscribeUserToInitiativeDto } from './dto/unsubscribe-user-from-initiative.dto';

@Injectable()
export class InitiativesService {
  constructor(
    @InjectModel(Initiative.name) private initiativeModel: Model<Initiative>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}
  async create(createInitiativeDto: CreateInitiativeDto) {
    const owner = await this.userModel
      .findById(createInitiativeDto.owner)
      .catch(() => {
        throw new NotFoundException('User not found');
      });

    if (!owner) throw new NotFoundException('User not found');

    const initiative = await this.initiativeModel
      .create(createInitiativeDto)
      .catch(() => {
        throw new BadRequestException('Unable to create initiative');
      });

    owner.initiatives.push(initiative._id);
    await owner.save();

    return initiative;
  }

  async findAll(country, province, title, themes, opportunities) {
    const query = buildQueryInitiative({
      country,
      province,
      title,
      opportunities,
      themes,
    });
    return await this.initiativeModel
      .find({
        ...query,
      })
      .catch(() => {
        throw new BadRequestException();
      });
  }

  async findOne(id: string): Promise<Initiative | null> {
    const result = await this.initiativeModel
      .findOne({ _id: id })
      .populate(populateInitiative())
      .catch(() => {
        throw new NotFoundException(`Initiative not found`);
      });

    if (!result) throw new NotFoundException(`Initiative ${id} not found`);

    return result;
  }

  async update(
    id: string,
    updateInitiativeDto: UpdateInitiativeDto,
  ): Promise<Initiative> {
    return await this.initiativeModel.findByIdAndUpdate(
      id,
      updateInitiativeDto,
      {
        new: true,
      },
    );
  }

  async remove(id: string) {
    return await this.initiativeModel
      .findOneAndDelete({ _id: id })
      .catch(() => {
        throw new NotFoundException(`Initiative not found`);
      });
  }

  async subscribeUserToInitiative(
    subscribeUserToInitiativeDto: SubscribeUserToInitiativeDto,
  ): Promise<object> {
    const { userId, initiativeId } = subscribeUserToInitiativeDto;

    const initiative = await this.initiativeModel
      .findById(initiativeId)
      .catch(() => {
        throw new NotFoundException('Initiative not found');
      });

    const user = await this.userModel.findById(userId).catch(() => {
      throw new NotFoundException('User not found');
    });

    const existingSubscription = initiative.volunteers.find(
      (subscription) => subscription.user.toString() === user._id.toString(),
    );

    if (existingSubscription)
      throw new ConflictException(
        'User is already subscribed to this initiative.',
      );

    user.initiatives.push(initiative._id);
    initiative.volunteers.push({ user: user._id, status: 'pending' });
    await user.save();
    await initiative.save();

    return {
      message: `User ${user._id} subscribed to initiative ${initiative._id} successfully.`,
    };
  }

  async updateSubscriptionStatus(
    updateSubscriptionStatusDto: UpdateSubscriptionStatusDto,
  ): Promise<object> {
    const { userId, initiativeId, status } = updateSubscriptionStatusDto;
    const initiative = await this.initiativeModel
      .findById(initiativeId)
      .catch(() => {
        throw new BadRequestException('Error finding initiative');
      });

    if (!initiative) throw new NotFoundException('Initiative not found');

    const user = await this.userModel.findById(userId).catch(() => {
      throw new BadRequestException('Error finding user');
    });

    if (!user) throw new NotFoundException('User not found');

    const subscription = initiative.volunteers.find(
      (subscription) => subscription.user.toString() === user._id.toString(),
    );

    if (!subscription) {
      throw new ConflictException('User is not subscribed to this initiative.');
    }

    const volunteers = initiative.volunteers.map((subscription) => {
      if (subscription.user.toString() === user._id.toString()) {
        subscription.status = status;
      }
      return subscription;
    });

    initiative.volunteers = volunteers;
    initiative.markModified('volunteers');
    await initiative.save();
    return {
      message: `User ${user._id} subscription status updated to ${status} successfully.`,
    };
  }

  async unsubscribeUserFromInitiative(
    unsubscribeUserToInitiativeDto: UnsubscribeUserToInitiativeDto,
  ): Promise<object> {
    const { userId, initiativeId } = unsubscribeUserToInitiativeDto;

    const initiative = await this.initiativeModel
      .findById(initiativeId)
      .catch(() => {
        throw new BadRequestException('Error finding initiative');
      });

    if (!initiative) throw new NotFoundException('Initiative not found');

    const user = await this.userModel.findById(userId).catch(() => {
      throw new BadRequestException('Error finding user');
    });

    if (!user) throw new NotFoundException('User not found');

    const subscription = initiative.volunteers.find(
      (subscription) => subscription.user.toString() === user._id.toString(),
    );

    if (!subscription) {
      throw new ConflictException('User is not subscribed to this initiative.');
    }

    const volunteers = initiative.volunteers.filter((subscription) => {
      return subscription.user.toString() !== user._id.toString();
    });

    const initiatives = user.initiatives.filter((initiative) => {
      return initiative.toString() !== initiativeId.toString();
    });
    user.initiatives = initiatives;
    user.markModified('initiatives');
    console.log(user.initiatives);
    await user.save();

    initiative.volunteers = volunteers;
    initiative.markModified('volunteers');
    await initiative.save();

    return {
      message: `User ${user._id} unsubscribed from initiative ${initiative._id} successfully.`,
    };
  }
}
