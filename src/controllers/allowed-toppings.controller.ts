import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AllowedToppings } from 'src/models/AllowedToppings';
import { AllowedToppingsService } from '../services/allowed-toppings.service';

@Controller('allowed-toppings')
export class AllowedToppingsController {
  constructor(private readonly service: AllowedToppingsService) { }

  @Post()
  create(@Body() createDTO: AllowedToppings) {
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
  update(@Param('id') id: string, @Body() updateDTO: AllowedToppings) {
    return this.service.update(+id, updateDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
