import { Module } from '@nestjs/common';
import { InitiativesService } from './initiatives.service';
import { InitiativesController } from './initiatives.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Initiative, InitiativeSchema } from './entities/initiative.entity';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Initiative.name, schema: InitiativeSchema },
    ]),
    CloudinaryModule,
  ],
  controllers: [InitiativesController],
  providers: [InitiativesService],
})
export class InitiativesModule {}
