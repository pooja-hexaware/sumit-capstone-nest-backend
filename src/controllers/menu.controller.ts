import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Menu } from 'src/models/Menu';
import { MenuService } from '../services/menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly service: MenuService) { }

  @Post()
  create(@Body() createDTO: Menu) {
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
  update(@Param('id') id: string, @Body() updateDTO: Menu) {
    return this.service.update(+id, updateDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
