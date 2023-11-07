import { IsNotEmpty } from 'class-validator';

export class ModifyFavoriteDto {
  @IsNotEmpty({ message: 'initiativeId is required' })
  initiativeId: string;
}
