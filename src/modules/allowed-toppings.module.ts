import { Module } from '@nestjs/common';
import { AllowedToppingsService } from '../services/allowed-toppings.service';
import { AllowedToppingsController } from '../controllers/allowed-toppings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AllowedToppingsSchema } from 'src/schemas/allowedToppings.schema';
import { AllowedToppingsRepository } from 'src/repositories/AllowedToppings.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "AllowedToppings", schema: AllowedToppingsSchema }
    ]),
  ],
  controllers: [AllowedToppingsController],
  providers: [AllowedToppingsRepository, AllowedToppingsService],
  exports: [AllowedToppingsService]
})
export class AllowedToppingsModule { }
