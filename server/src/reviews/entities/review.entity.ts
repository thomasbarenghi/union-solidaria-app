import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { IsNotEmpty } from 'class-validator';

export type SessionDocument = HydratedDocument<Review>;

@Schema()
export class Review {
  _id: ObjectId;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'body is required' })
  body: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'rating is required' })
  rating: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  author: [mongoose.Schema.Types.ObjectId];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Initiative' }] })
  initiative: [mongoose.Schema.Types.ObjectId];
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
