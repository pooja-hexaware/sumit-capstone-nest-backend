import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Facilities } from 'src/models/Facilities';

@Injectable()
export class FacilitiesRepository {
  constructor(@InjectModel("Facilities") private model: Model<Facilities>) {
  }

  create(createDTO: Partial<Facilities>) {
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

  update(id: number, updateDTO: Partial<Facilities>, obj: object) {
    return this.model.findOneAndUpdate({ _id: id }, updateDTO, obj);
  }

  delete(id: number) {
    return this.model.deleteOne({ _id: id });
  }
}