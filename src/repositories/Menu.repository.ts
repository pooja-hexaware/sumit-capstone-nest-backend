import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu } from 'src/models/Menu';

@Injectable()
export class MenuRepository {
  constructor(@InjectModel("Menu") private model: Model<Menu>) {
  }

  create(createDTO: Partial<Menu>) {
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

  update(id: number, updateDTO: Partial<Menu>, obj: object) {
    return this.model.findOneAndUpdate({ _id: id }, updateDTO, obj);
  }

  delete(id: number) {
    return this.model.deleteOne({ _id: id });
  }
}