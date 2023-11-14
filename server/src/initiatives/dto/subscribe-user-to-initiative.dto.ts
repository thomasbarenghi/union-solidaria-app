import { IsNotEmpty } from 'class-validator';

export class SubscribeUserToInitiativeDto {
  @IsNotEmpty({ message: 'userId is required' })
  userId: string;
}
