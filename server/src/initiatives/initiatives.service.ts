import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  NotAcceptableException
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

@Injectable()
export class InitiativesService {
  constructor(
    @InjectModel(Initiative.name) private initiativeModel: Model<Initiative>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}
  async create(createInitiativeDto: CreateInitiativeDto) {
    try {
      console.log(createInitiativeDto);
      return await new this.initiativeModel(createInitiativeDto).save();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async findAll(country, province, title, themes, opportunities) {
    try {
      console.log(country, province, title, themes, opportunities);
      const query = buildQueryInitiative({
        country,
        province,
        title,
        opportunities,
        themes,
      });
      return await this.initiativeModel.find({
        ...query,
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: string): Promise<Initiative | null> {
    try {
      const result = await this.initiativeModel.findOne({ _id: id }).populate({
        path: 'volunteers',
        populate: {
          path: 'user',
          model: 'User',
        },
      });

      if (!result) {
        throw new NotFoundException(`Initiative ${id} not found`);
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async update(
    id: string,
    updateInitiativeDto: UpdateInitiativeDto,
  ): Promise<Initiative> {
    try {
      return await this.initiativeModel.findByIdAndUpdate(
        id,
        updateInitiativeDto,
        {
          new: true,
        },
      );
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async remove(id: string) {
    try {
      return await this.initiativeModel.findOneAndDelete({ _id: id });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async subscribeUserToInitiative(
    subscribeUserToInitiativeDto: SubscribeUserToInitiativeDto,
  ): Promise<object> {
    try {
      const { userId, initiativeId } = subscribeUserToInitiativeDto;

      const initiative = await this.initiativeModel.findById(initiativeId);
      const user = await this.userModel.findById(userId);
      if (!initiative || !user) {
        throw new Error('Initiative not found or user not found.');
      }

      const existingSubscription = initiative.volunteers.find(
        (subscription) => subscription.user.toString() === user._id.toString(),
      );

      if (existingSubscription) {
        throw new NotAcceptableException('User is already subscribed to this initiative.');
      }

      user.subscribedInitiatives.push(initiative._id);
      initiative.volunteers.push({ user: user._id, status: 'pending' });
      await user.save();
      await initiative.save();

      return {
        message: `User ${user._id} subscribed to initiative ${initiative._id} successfully.`,
      };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async updateSubscriptionStatus(
    updateSubscriptionStatusDto: UpdateSubscriptionStatusDto,
  ): Promise<object> {
    const { userId, initiativeId, status } = updateSubscriptionStatusDto;
    const initiative = await this.initiativeModel.findById(initiativeId);
    const user = await this.userModel.findById(userId);

    if (!initiative || !user) {
      throw new Error('Initiative not found or user not found.');
    }

    const subscription = initiative.volunteers.find(
      (subscription) => subscription.user.toString() === user._id.toString(),
    );

    if (!subscription) {
      throw new Error('User is not subscribed to this initiative.');
    }

    subscription.status = status;
     initiative.save();
     return {
        message: `User ${user._id} subscription status updated to ${status} successfully.`,
     }
  }
}
