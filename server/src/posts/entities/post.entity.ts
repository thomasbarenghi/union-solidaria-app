import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { IsNotEmpty } from 'class-validator';

export type SessionDocument = HydratedDocument<Post>;

@Schema({ timestamps: true })
export class Post {
  _id: ObjectId;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'body is required' })
  body: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Initiative' })
  initiative: mongoose.Schema.Types.ObjectId;

  createdAt: Date;

  updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
