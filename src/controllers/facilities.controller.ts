import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Facilities } from 'src/models/Facilities';
import { FacilitiesService } from '../services/facilities.service';

@Controller('facilities')
export class FacilitiesController {
  constructor(private readonly service: FacilitiesService) { }

  @Post()
  create(@Body() createDTO: Facilities) {
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
  update(@Param('id') id: string, @Body() updateDTO: Facilities) {
    return this.service.update(+id, updateDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
