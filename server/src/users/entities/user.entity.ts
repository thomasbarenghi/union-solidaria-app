import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId, PopulatedDoc } from 'mongoose';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { Initiative } from 'src/initiatives/entities/initiative.entity';

export type SessionDocument = HydratedDocument<User>;

@Schema()
export class User {
  _id: ObjectId;

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

  @Prop({ required: true, default: 'volunteer' })
  @IsNotEmpty({ message: 'role is required' })
  role: 'volunteer' | 'organization';

  @Prop({ required: true })
  @IsNotEmpty({ message: 'password is required' })
  password: string;

  @Prop({
    required: true,
    default:
      'https://images.unsplash.com/photo-1461532257246-777de18cd58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
  })
  bannerImage?: string;

  @Prop({ required: true, unique: true })
  @IsNotEmpty({ message: 'username is required' })
  username: string;

  @Prop({
    required: true,
    default:
      'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  })
  profileImage?: string;

  @Prop({ required: false, default: '' })
  orgName?: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    default: [],
  })
  posts?: mongoose.Schema.Types.ObjectId[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Initiative' }],
    default: [],
  })
  initiatives?: Array<PopulatedDoc<Initiative & Document>>;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Initiative' }],
    default: [],
  })
  favorites?: mongoose.Schema.Types.ObjectId[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    default: [],
  })
  reviews?: mongoose.Schema.Types.ObjectId[];

  @Prop({ required: false, default: '' })
  donations?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
