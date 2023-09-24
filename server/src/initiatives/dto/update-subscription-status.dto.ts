import { IsNotEmpty, IsIn } from 'class-validator';

export class UpdateSubscriptionStatusDto {
  @IsNotEmpty({ message: 'status is required' })
  @IsIn(['pending', 'accepted', 'rejected'], {
    message: 'status must be one of pending, accepted, rejected',
  })
  status: 'pending' | 'accepted' | 'rejected';

  @IsNotEmpty({ message: 'userId is required' })
  userId: string;

  @IsNotEmpty({ message: 'initiativeId is required' })
  initiativeId: string;
}
