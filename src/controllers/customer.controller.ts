import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Customer } from 'src/models/Customer';
import { CustomerService } from '../services/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly service: CustomerService) { }

  @Post()
  create(@Body() createDTO: Customer) {
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
  update(@Param('id') id: string, @Body() updateDTO: Customer) {
    return this.service.update(+id, updateDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
