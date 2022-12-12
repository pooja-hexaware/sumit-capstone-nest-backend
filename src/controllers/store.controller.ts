import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Store } from 'src/models/Store';
import { StoreService } from '../services/store.service';

@Controller('store')
export class StoreController {
  constructor(private readonly service: StoreService) { }

  @Post()
  create(@Body() createDTO: Store) {
    return this.service.create(createDTO);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDTO: Store) {
    return this.service.update(+id, updateDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
