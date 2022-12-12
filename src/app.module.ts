import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Constants } from './utils/constants';
import { CustomerModule } from './modules/customer.module';
import { MenuModule } from './modules/menu.module';
import { StoreModule } from './modules/store.module';
import { StoreMenuModule } from './modules/store-menu.module';
import { OrderModule } from './modules/order.module';
import { AllowedToppingsModule } from './modules/allowed-toppings.module';
import { FacilitiesModule } from './modules/facilities.module';

@Module({
  imports: [
    MongooseModule.forRoot(Constants.MongoDBURL),
    CustomerModule,
    MenuModule,
    StoreModule,
    StoreMenuModule,
    OrderModule,
    AllowedToppingsModule,
    FacilitiesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
