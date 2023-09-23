import { Module, forwardRef } from '@nestjs/common';
import { InitiativesService } from './initiatives.service';
import { InitiativesController } from './initiatives.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Initiative, InitiativeSchema } from './entities/initiative.entity';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { User, UserSchema } from 'src/users/entities/user.entity';

@Module({
  imports: [
    forwardRef(() =>  MongooseModule.forFeature([
      { name: Initiative.name, schema: InitiativeSchema },
      { name: User.name, schema: UserSchema}
    ]))
   ,
    CloudinaryModule,
  ],
  controllers: [InitiativesController],
  providers: [InitiativesService],
})
export class InitiativesModule {}
