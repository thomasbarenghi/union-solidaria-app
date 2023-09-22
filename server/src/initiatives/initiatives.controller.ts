import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InitiativesService } from './initiatives.service';
import { CreateInitiativeDto } from './dto/create-initiative.dto';
import { UpdateInitiativeDto } from './dto/update-initiative.dto';

@Controller('initiatives')
export class InitiativesController {
  constructor(private readonly initiativesService: InitiativesService) {}

  @Post()
  create(@Body() createInitiativeDto: CreateInitiativeDto) {
    return this.initiativesService.create(createInitiativeDto);
  }

  @Get()
  findAll() {
    return this.initiativesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.initiativesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInitiativeDto: UpdateInitiativeDto) {
    return this.initiativesService.update(+id, updateInitiativeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.initiativesService.remove(+id);
  }
}
