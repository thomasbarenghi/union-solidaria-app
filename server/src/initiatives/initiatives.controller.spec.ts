import { Test, TestingModule } from '@nestjs/testing';
import { InitiativesController } from './initiatives.controller';
import { InitiativesService } from './initiatives.service';

describe('InitiativesController', () => {
  let controller: InitiativesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InitiativesController],
      providers: [InitiativesService],
    }).compile();

    controller = module.get<InitiativesController>(InitiativesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
