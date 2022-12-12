import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from 'src/models/Customer';

@Injectable()
export class CustomerRepository {
  constructor(@InjectModel("Customer") private model: Model<Customer>) {
  }

  create(createDTO: Partial<Customer>) {
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

  update(id: number, updateDTO: Partial<Customer>, obj: object) {
    return this.model.findOneAndUpdate({ _id: id }, updateDTO, obj);
  }

  delete(id: number) {
    return this.model.deleteOne({ _id: id });
  }
}