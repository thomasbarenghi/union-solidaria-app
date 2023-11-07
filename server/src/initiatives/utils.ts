import { ConflictException, NotFoundException } from '@nestjs/common';
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
    .exec()
    .catch(() => {
      throw new NotFoundException('Initiative not found');
    });

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
  console.log(updateInitiativeDto);
  return await initiativeModel.findByIdAndUpdate(id, updateInitiativeDto, {
    new: true,
  });
};

export const checkSubscription = async (
  initiative: Initiative,
  user: User,
  initiativeModel: Model<Initiative>,
  userModel: Model<User>,
  type: 'subscribe' | 'unsubscribe' | 'update',
) => {
  const isOrganization = user.role === 'organization';
  if (isOrganization && type === 'subscribe') {
    throw new ConflictException('Organization cannot subscribe to initiatives');
  }

  const isSubscribed = initiative.volunteers.find(
    (subscription) => subscription.user._id.toString() === user._id.toString(),
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
    return subscription.user._id.toString() !== user._id.toString();
  });

  user.initiatives = user.initiatives.filter((initiative) => {
    return initiative._id.toString() !== initiative._id.toString();
  });

  return {
    user,
    initiative,
  };
};
