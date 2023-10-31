import { IsNotEmpty } from 'class-validator';

export class UnsubscribeUserToInitiativeDto {
  @IsNotEmpty({ message: 'userId is required' })
  userId: string;
}
