import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { IsNotEmpty } from 'class-validator';

export type SessionDocument = HydratedDocument<Review>;

@Schema({ timestamps: true })
export class Review {
  _id: ObjectId;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'body is required' })
  body: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'rating is required' })
  rating: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Initiative' })
  initiative: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  initiativeOwner: mongoose.Schema.Types.ObjectId;

  createdAt: Date;

  updatedAt: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
