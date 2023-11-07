import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateOrganizationDto {
  @IsNotEmpty({ message: 'orgName is required' })
  @IsString({ message: 'orgName must be a string' })
  orgName: string;
}
