import { Module } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { CustomerController } from '../controllers/customer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from 'src/schemas/customer.schema';
import { CustomerRepository } from 'src/repositories/Customer.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Customer", schema: CustomerSchema }
    ]),
  ],
  controllers: [CustomerController],
  providers: [CustomerRepository, CustomerService],
  exports: [CustomerService]
})
export class CustomerModule { }
