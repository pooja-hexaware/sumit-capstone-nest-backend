import { Module } from '@nestjs/common';
import { FacilitiesService } from '../services/facilities.service';
import { FacilitiesController } from '../controllers/facilities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FacilitiesSchema } from 'src/schemas/facilities.schema';
import { FacilitiesRepository } from 'src/repositories/Facilities.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Facilities", schema: FacilitiesSchema }
    ]),
  ],
  controllers: [FacilitiesController],
  providers: [FacilitiesRepository, FacilitiesService],
  exports: [FacilitiesService]
})
export class FacilitiesModule { }
