import { Module } from '@nestjs/common';
import { StoreService } from '../services/store.service';
import { StoreController } from '../controllers/store.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreSchema } from 'src/schemas/store.schema';
import { StoreRepository } from 'src/repositories/Store.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Store", schema: StoreSchema }
    ]),
  ],
  controllers: [StoreController],
  providers: [StoreRepository, StoreService],
  exports: [StoreService]
})
export class StoreModule { }
