import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStripeIntentDto {
  @IsNotEmpty({ message: 'amount is required' })
  @IsNumber()
  amount: number;

  @IsNotEmpty({ message: 'userId is required' })
  @IsString()
  userId: string;

  @IsNotEmpty({ message: 'initiativeId is required' })
  @IsString()
  initiativeId: string;
}
