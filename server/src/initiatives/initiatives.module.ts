import { Module } from '@nestjs/common';
import { InitiativesService } from './initiatives.service';
import { InitiativesController } from './initiatives.controller';

@Module({
  controllers: [InitiativesController],
  providers: [InitiativesService],
})
export class InitiativesModule {}
