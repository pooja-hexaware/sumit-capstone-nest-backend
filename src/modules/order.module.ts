import { Module } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { OrderController } from '../controllers/order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from 'src/schemas/order.schema';
import { OrderRepository } from 'src/repositories/Order.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Order", schema: OrderSchema }
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderRepository, OrderService],
  exports: [OrderService]
})
export class OrderModule { }
