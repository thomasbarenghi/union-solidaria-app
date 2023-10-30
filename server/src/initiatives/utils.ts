import { NotFoundException } from '@nestjs/common';
import { populateInitiative } from 'src/constants/populateInitiative.const';
import { Initiative } from './entities/initiative.entity';
import { Model } from 'mongoose';
import { findUser } from 'src/users/utils';
import { User } from 'src/users/entities/user.entity';
import { UpdateInitiativeDto } from './dto/update-initiative.dto';

export const findInitiative = async (
  id: string,
  initiativeModel: Model<Initiative>,
  afterAction?: 'delete' | 'update',
  updateInitiativeDto?: UpdateInitiativeDto,
) => {
  const initiative = await initiativeModel
    .findOne({ _id: id })
    .populate(populateInitiative())
    .exec();

  if (!initiative) {
    throw new NotFoundException('Initiative not found');
  }

  if (afterAction === 'delete') {
    return await deleteInitiative(id, initiativeModel);
  } else if (afterAction === 'update') {
    return await updateInitiative(id, updateInitiativeDto, initiativeModel);
  }

  return initiative;
};

export const deleteInitiative = async (
  id: string,
  initiativeModel: Model<Initiative>,
) => {
  return await initiativeModel.findOneAndDelete({ _id: id }).catch(() => {
    throw new NotFoundException(`Initiative not found`);
  });
};

export const updateInitiative = async (
  id: string,
  updateInitiativeDto: UpdateInitiativeDto,
  initiativeModel: Model<Initiative>,
) => {
  return await initiativeModel.findByIdAndUpdate(id, updateInitiativeDto, {
    new: true,
  });
};

export const checkSubscription = async (
  initiativeId: string,
  userId: string,
  initiativeModel: Model<Initiative>,
  userModel: Model<User>,
  type: 'subscribe' | 'unsubscribe' | 'update',
) => {
  const initiative = await findInitiative(initiativeId, initiativeModel);
  const user = await findUser(userId, userModel);

  const isSubscribed = initiative.volunteers.find(
    (subscription) => subscription.user.toString() === user._id.toString(),
  );

  if (type === 'subscribe') {
    if (isSubscribed) {
      throw new NotFoundException('User already subscribed');
    }
  } else if (type === 'unsubscribe' || type === 'update') {
    if (!isSubscribed) {
      throw new NotFoundException('User not subscribed');
    }
  }

  return isSubscribed;
};

export const unsubscribeUserFromInitiative = async (
  user: User,
  initiative: Initiative,
) => {
  initiative.volunteers = initiative.volunteers.filter((subscription) => {
    return subscription.user.toString() !== user._id.toString();
  });

  user.initiatives = user.initiatives.filter((initiative) => {
    return initiative.toString() !== initiative._id.toString();
  });

  return {
    user,
    initiative,
  };
};
