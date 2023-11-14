import { NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { populateUser } from 'src/constants/populateUser.const';
import { User } from './entities/user.entity';

export const findUser = async (id: string, userModel: Model<User>) => {
  const idPattern = /^[0-9a-f]{24}$/i;
  const emailPattern = /\S+@\S+\.\S+/;
  let user;

  if (!id) {
    throw new NotFoundException("User doesn't exist");
  }

  if (idPattern.test(id)) {
    user = await userModel.findById(id);
  } else if (emailPattern.test(id)) {
    user = await userModel.findOne({ email: id.toLowerCase() });
  } else {
    user = await userModel.findOne({ username: id });
  }

  if (!user) {
    throw new NotFoundException("User doesn't exist");
  }

  return user.populate(populateUser(true, true, true));
};

export const checkUniqueEmail = async (
  email: string,
  userModel: Model<User>,
) => {
  const existingUser = await userModel.findOne({ email: email });
  if (existingUser && existingUser.email !== email) {
    throw new NotFoundException('Email already in use');
  }
};

export const checkUniqueUsername = async (
  username: string,
  userModel: Model<User>,
) => {
  const existingUser = await userModel.findOne({ username: username });
  if (existingUser && existingUser.username !== username) {
    throw new NotFoundException('Username already in use');
  }
};
