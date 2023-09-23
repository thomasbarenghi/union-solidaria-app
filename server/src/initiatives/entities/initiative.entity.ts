import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { IsNotEmpty } from 'class-validator';

export type SessionDocument = HydratedDocument<Initiative>;

@Schema()
export class Initiative {
  _id: ObjectId;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'title is required' })
  title: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'description is required' })
  description: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'deadLine is required' })
  deadLine: Date;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'startDate is required' })
  startDate: Date;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'endDate is required' })
  endDate: Date;

  @Prop({ required: false })
  galery?: string[];

  @Prop({
    required: false,
    default:
      'https://res.cloudinary.com/dygpgsiei/image/upload/v1693699459/y48ke3c8mlgwjuksqmi1.webp',
  })
  thumbnail?: string;

  @Prop({ required: false, default: [] })
  volunteers?: Volunteer[];

  @Prop({ required: true })
  opportunities: string[];

  @Prop({ required: true })
  @IsNotEmpty({ message: 'country is required' })
  country: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'province is required' })
  province: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'address is required' })
  address: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'owner is required' })
  owner: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'startHour is required' })
  startHour: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'endHour is required' })
  endHour: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'extraInfo is required' })
  extraInfo: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'themes is required' })
  themes: string[];

  @Prop({ required: false })
  donations?: string[];

  createdAt: Date;

  updatedAt: Date;
}

class Volunteer {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  user: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  status: 'pending' | 'accepted' | 'rejected';
}

export const InitiativeSchema = SchemaFactory.createForClass(Initiative);