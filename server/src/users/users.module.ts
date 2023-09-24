import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import {
  Initiative,
  InitiativeSchema,
} from 'src/initiatives/entities/initiative.entity';

@Module({
  imports: [
    forwardRef(() =>
      MongooseModule.forFeature([
        { name: User.name, schema: UserSchema },
        { name: Initiative.name, schema: InitiativeSchema },
      ]),
    ),
    CloudinaryModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
