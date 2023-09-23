import { OmitType } from '@nestjs/mapped-types';
import { Initiative } from '../entities/initiative.entity';

export class CreateInitiativeDto extends OmitType(Initiative, [
  '_id',
] as const) {}
