import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateInitiativeDto } from './dto/create-initiative.dto';
import { UpdateInitiativeDto } from './dto/update-initiative.dto';
import { buildQueryInitiative } from 'src/utils/initiativeFilter.utils';
import { InjectModel } from '@nestjs/mongoose';
import { Initiative } from './entities/initiative.entity';
import { Model } from 'mongoose';
import { UpdateSubscriptionStatusDto } from './dto/update-subscription-status.dto';
import { SubscribeUserToInitiativeDto } from './dto/subscribe-user-to-initiative.dto';
import { User } from 'src/users/entities/user.entity';
import { UnsubscribeUserToInitiativeDto } from './dto/unsubscribe-user-from-initiative.dto';
import {
  checkSubscription,
  findInitiative,
  unsubscribeUserFromInitiative,
} from './utils';
import { findUser } from 'src/users/utils';

@Injectable()
export class InitiativesService {
  constructor(
    @InjectModel(Initiative.name) private initiativeModel: Model<Initiative>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}
  async create(createInitiativeDto: CreateInitiativeDto) {
    const owner = await findUser(
      createInitiativeDto.owner.toString(),
      this.userModel,
    );

    const initiative = await this.initiativeModel
      .create(createInitiativeDto)
      .catch(() => {
        throw new BadRequestException('Unable to create initiative');
      });

    owner.initiatives.push(initiative._id);
    owner.markModified('initiatives');
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
    return findInitiative(id, this.initiativeModel);
  }

  async update(
    id: string,
    updateInitiativeDto: UpdateInitiativeDto,
  ): Promise<Initiative> {
    return await findInitiative(
      id,
      this.initiativeModel,
      'update',
      updateInitiativeDto,
    );
  }

  async remove(id: string) {
    return await findInitiative(id, this.initiativeModel, 'delete');
  }

  async subscribeUserToInitiative(
    subscribeUserToInitiativeDto: SubscribeUserToInitiativeDto,
    initiativeId: string,
  ): Promise<object> {
    const { userId } = subscribeUserToInitiativeDto;
    const initiative = await findInitiative(initiativeId, this.initiativeModel);
    const user = await findUser(userId, this.userModel);
    await checkSubscription(
      initiativeId,
      userId,
      this.initiativeModel,
      this.userModel,
      'subscribe',
    );
    user.initiatives.push(initiative._id);
    user.markModified('initiatives');
    initiative.volunteers.push({ user: user._id, status: 'pending' });
    initiative.markModified('volunteers');
    await Promise.all([user.save(), initiative.save()]);
    return {
      message: `User ${user._id} subscribed to initiative ${initiative._id} successfully.`,
    };
  }

  async updateSubscriptionStatus(
    initiativeId: string,
    updateSubscriptionStatusDto: UpdateSubscriptionStatusDto,
  ): Promise<object> {
    const { userId, status } = updateSubscriptionStatusDto;
    const initiative = await findInitiative(initiativeId, this.initiativeModel);
    const user = await findUser(userId, this.userModel);

    await checkSubscription(
      initiativeId,
      userId,
      this.initiativeModel,
      this.userModel,
      'update',
    );

    initiative.volunteers = initiative.volunteers.map((subscription) => {
      if (subscription.user._id.toString() === user._id.toString()) {
        subscription.status = status;
      }
      return subscription;
    });
    initiative.markModified('volunteers');
    await initiative.save();
    return {
      message: `User ${user._id} subscription status updated to ${status} successfully.`,
    };
  }

  async unsubscribeUserFromInitiative(
    unsubscribeUserToInitiativeDto: UnsubscribeUserToInitiativeDto,
    initiativeId: string,
  ): Promise<object> {
    const { userId } = unsubscribeUserToInitiativeDto;
    const initiative = await findInitiative(initiativeId, this.initiativeModel);
    const user = await findUser(userId, this.userModel);
    await checkSubscription(
      initiativeId,
      userId,
      this.initiativeModel,
      this.userModel,
      'unsubscribe',
    );

    const { user: userModed, initiative: initiativeModed } =
      await unsubscribeUserFromInitiative(user, initiative);
    user.initiatives = userModed.initiatives;
    user.markModified('initiatives');
    initiative.volunteers = initiativeModed.volunteers;
    initiative.markModified('volunteers');
    await Promise.all([user.save(), initiative.save()]);
    return {
      message: `User ${user._id} unsubscribed from initiative ${initiative._id} successfully.`,
    };
  }
}
