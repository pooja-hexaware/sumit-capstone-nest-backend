import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Order } from 'src/models/Order';
import { OrderService } from '../services/order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly service: OrderService) { }

  @Post()
  create(@Body() createDTO: Order) {
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
  update(@Param('id') id: string, @Body() updateDTO: Order) {
    return this.service.update(+id, updateDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
