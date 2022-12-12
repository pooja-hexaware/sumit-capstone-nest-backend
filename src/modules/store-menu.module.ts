import { Module } from '@nestjs/common';
import { StoreMenuService } from '../services/store-menu.service';
import { StoreMenuController } from '../controllers/store-menu.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreMenuSchema } from 'src/schemas/storeMenu.schema';
import { StoreMenuRepository } from 'src/repositories/StoreMenu.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "StoreMenu", schema: StoreMenuSchema }
    ]),
  ],
  controllers: [StoreMenuController],
  providers: [StoreMenuRepository, StoreMenuService],
  exports: [StoreMenuService]
})
export class StoreMenuModule { }
