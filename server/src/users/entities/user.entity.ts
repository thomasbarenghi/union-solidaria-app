import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IsNotEmpty, IsEmail } from 'class-validator';

export type SessionDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  @IsNotEmpty({ message: 'name is required' })
  firstName: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'lastName is required' })
  lastName: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'birthday is required' })
  birthday: Date;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'phone is required' })
  phone: string;

  @Prop({ required: true, unique: true })
  @IsNotEmpty({ message: 'email is invalid' })
  @IsEmail()
  email: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'role is required' })
  role: 'volunteer' | 'organization';

  @Prop({ required: true })
  @IsNotEmpty({ message: 'password is required' })
  password: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'bannerImage is required' })
  bannerImage: string;

  @Prop({ required: true, unique: true })
  @IsNotEmpty({ message: 'username is required' })
  username: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'profileImage is required' })
  profileImage: string;

  @Prop({ required: false })
  orgName: string;

  @Prop({ required: false })
  posts: string;

  @Prop({ required: false })
  subscribedVolunteers: string;

  @Prop({ required: false })
  createdInitiatives: string;

  @Prop({ required: false })
  emitedReviews: string;

  @Prop({ required: false })
  donations: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
