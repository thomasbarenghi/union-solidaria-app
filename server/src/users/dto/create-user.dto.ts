import { User } from '../entities/user.entity';
import { OmitType } from '@nestjs/mapped-types';

export class CreateUserDto extends OmitType(User, ['_id'] as const) {}
