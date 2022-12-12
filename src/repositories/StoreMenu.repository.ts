import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { StoreMenu } from 'src/models/StoreMenu';

@Injectable()
export class StoreMenuRepository {
  constructor(@InjectModel("StoreMenu") private model: Model<StoreMenu>) {
  }

  create(createDTO: Partial<StoreMenu>) {
    const newObj = new this.model(createDTO);
    newObj.save();

    return newObj.toObject({ versionKey: false });
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: number) {
    return this.model.findOne({ storeId: id });
  }

  update(id: number, updateDTO: Partial<StoreMenu>, obj: object) {
    let objId = new mongoose.Types.ObjectId(id);
    return this.model.findOneAndUpdate({ _id: objId }, updateDTO, obj);
  }

  delete(id: number) {
    return this.model.deleteOne({ _id: id });
  }
}