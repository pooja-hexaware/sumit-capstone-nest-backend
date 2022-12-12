import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Store } from 'src/models/Store';

@Injectable()
export class StoreRepository {
  constructor(@InjectModel("Store") private model: Model<Store>) {
  }

  create(createDTO: Partial<Store>) {
    const newObj = new this.model(createDTO);
    newObj.save();

    return newObj.toObject({ versionKey: false });
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    let cityResult = this.model.find({ city: id });
    if (cityResult != null) {
      return cityResult;
    }

    let zipResult = this.model.find({ zip: id });
    if (zipResult != null) {
      return zipResult;
    }

    let stateResult = this.model.find({ state: id });
    if (stateResult != null) {
      return stateResult;
    }
  }

  update(id: number, updateDTO: Partial<Store>, obj: object) {
    return this.model.findOneAndUpdate({ _id: id }, updateDTO, obj);
  }

  delete(id: number) {
    return this.model.deleteOne({ _id: id });
  }
}