import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateInitiativeDto } from './dto/create-initiative.dto';
import { UpdateInitiativeDto } from './dto/update-initiative.dto';
import { buildQueryInitiative } from 'src/utils/initiativeFilter.utils';
import { InjectModel } from '@nestjs/mongoose';
import { Initiative } from './entities/initiative.entity';
import { Model } from 'mongoose';

@Injectable()
export class InitiativesService {
  constructor(
    @InjectModel(Initiative.name) private initiativeModel: Model<Initiative>,
  ) {}
  async create(createInitiativeDto: CreateInitiativeDto) {
    try {
      console.log(createInitiativeDto);
      return await new this.initiativeModel(createInitiativeDto).save();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async findAll(country, province, title, themes, opportunities) {
    try {
      console.log(country, province, title, themes, opportunities);
      const query = buildQueryInitiative({
        country,
        province,
        title,
        opportunities,
        themes,
      });
      return await this.initiativeModel.find({
        ...query,
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: string): Promise<Initiative | null> {
    try {
      const result = await this.initiativeModel.findOne({ _id: id });

      if (!result) {
        throw new NotFoundException(`Initiative ${id} not found`);
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async update(
    id: string,
    updateInitiativeDto: UpdateInitiativeDto,
  ): Promise<Initiative> {
    try {
      return await this.initiativeModel.findByIdAndUpdate(
        id,
        updateInitiativeDto,
        {
          new: true,
        },
      );
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async remove(id: string) {
    try {
      return await this.initiativeModel.findOneAndDelete({ _id: id });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  // endpoint para quye un voluntario se una a una iniciativa
  //   async joinInitiative(id: string, userId: string) {
  //     try {
  //       const initiative = await this.initiativeModel.findOne({
  //         where: { id },
  //         include: {
  //           volunteers: true,
  //         },
  //       });
  //       if (!initiative) {
  //         throw new NotFoundException(`Initiative ${id} not found`);
  //       }
  //       const volunteer = await this.prisma.user.findUnique({
  //         where: { id: userId },
  //       });
  //       if (!volunteer) {
  //         throw new NotFoundException(`Volunteer ${userId} not found`);
  //       }
  //       const updatedInitiative = await this.prisma.initiative.update({
  //         where: { id },
  //         data: {
  //           volunteers: {
  //             connect: {
  //               id: userId,
  //             },
  //           },
  //         },
  //       });
  //       return updatedInitiative;
  //     } catch (error) {
  //       console.log(error);
  //       this.errorHandler(error);
  //     }
  //   }
}
