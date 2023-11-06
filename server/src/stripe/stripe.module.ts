import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/entities/user.entity';
import {
  Initiative,
  InitiativeSchema,
} from 'src/initiatives/entities/initiative.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Initiative.name, schema: InitiativeSchema },
    ]),
  ],
  controllers: [StripeController],
  providers: [StripeService],
})
export class StripeModule {}
