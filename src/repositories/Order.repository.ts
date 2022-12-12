import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from 'src/models/Order';

@Injectable()
export class OrderRepository {
  constructor(@InjectModel("Order") private model: Model<Order>) {
  }

  create(createDTO: Partial<Order>) {
    const newObj = new this.model(createDTO);
    newObj.save();

    return newObj.toObject({ versionKey: false });
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: number) {
    return this.model.findOne({ _id: id });
  }

  update(id: number, updateDTO: Partial<Order>, obj: object) {
    return this.model.findOneAndUpdate({ _id: id }, updateDTO, obj);
  }

  delete(id: number) {
    return this.model.deleteOne({ _id: id });
  }
}