import { Injectable } from '@nestjs/common';
import { CreateInitiativeDto } from './dto/create-initiative.dto';
import { UpdateInitiativeDto } from './dto/update-initiative.dto';

@Injectable()
export class InitiativesService {
  create(createInitiativeDto: CreateInitiativeDto) {
    return 'This action adds a new initiative';
  }

  findAll() {
    return `This action returns all initiatives`;
  }

  findOne(id: number) {
    return `This action returns a #${id} initiative`;
  }

  update(id: number, updateInitiativeDto: UpdateInitiativeDto) {
    return `This action updates a #${id} initiative`;
  }

  remove(id: number) {
    return `This action removes a #${id} initiative`;
  }
}
