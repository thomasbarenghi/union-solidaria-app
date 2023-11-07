import { Schema } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

@Schema()
export class Donation {
  _id?: ObjectId;

  @IsNotEmpty({ message: 'Transaction Id is required' })
  TransactionId: string;

  @IsNotEmpty({ message: 'Amount is required' })
  amount: number;
  createdAt: Date;

  @IsNotEmpty({ message: 'User Id is required' })
  userId: string;

  initiativeID: string;
  isGlobalDonation: boolean;
}
