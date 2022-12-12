import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AllowedToppings } from 'src/models/AllowedToppings';

@Injectable()
export class AllowedToppingsRepository {
  constructor(@InjectModel("AllowedToppings") private model: Model<AllowedToppings>) {
  }

  create(createDTO: Partial<AllowedToppings>) {
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

  update(id: number, updateDTO: Partial<AllowedToppings>, obj: object) {
    return this.model.findOneAndUpdate({ _id: id }, updateDTO, obj);
  }

  delete(id: number) {
    return this.model.deleteOne({ _id: id });
  }
}
