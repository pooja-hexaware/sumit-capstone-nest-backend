import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreMenu } from 'src/models/StoreMenu';
import { StoreMenuService } from '../services/store-menu.service';

@Controller('store-menu')
export class StoreMenuController {
  constructor(private readonly service: StoreMenuService) { }

  @Post()
  create(@Body() createDTO: StoreMenu) {
    return this.service.create(createDTO);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDTO: StoreMenu) {
    return this.service.update(+id, updateDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
