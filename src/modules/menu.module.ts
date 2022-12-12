import { Module } from '@nestjs/common';
import { MenuService } from '../services/menu.service';
import { MenuController } from '../controllers/menu.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuSchema } from 'src/schemas/menu.schema';
import { MenuRepository } from 'src/repositories/Menu.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Menu", schema: MenuSchema }
    ]),
  ],
  controllers: [MenuController],
  providers: [MenuRepository, MenuService],
  exports: [MenuService]
})
export class MenuModule { }
