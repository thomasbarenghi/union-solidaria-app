import { IsNotEmpty, IsEmail, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'name is required' })
  firstName: string;

  @IsNotEmpty({ message: 'lastName is required' })
  lastName: string;

  @IsNotEmpty({ message: 'birthday is required' })
  birthday: Date;

  @IsNotEmpty({ message: 'phone is required' })
  phone: string;

  @IsNotEmpty({ message: 'email is invalid' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'role is required' })
  role: 'volunteer' | 'organization';

  @IsNotEmpty({ message: 'password is required' })
  @Matches(/^(?=.*[A-Z)(?=.*[a-z])(?=.*\d).{8,}$/, {
    message:
      'password must contain at least 8 characters, one uppercase, one lowercase, and one number',
  })
  password: string;


  bannerImage?: string;

  @IsNotEmpty({ message: 'username is required' })
  username: string;

  profileImage?: string;

  orgName?: string;
}
