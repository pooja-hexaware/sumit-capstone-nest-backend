import { Injectable } from '@nestjs/common';
import { Facilities } from 'src/models/Facilities';
import { FacilitiesRepository } from 'src/repositories/Facilities.repository';

@Injectable()
export class FacilitiesService {
  constructor(private readonly repo: FacilitiesRepository) { }

  create(createDTO: Partial<Facilities>) {
    return this.repo.create(createDTO);
  }

  findAll() {
    return this.repo.findAll();
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  update(id: number, updateDTO: Partial<Facilities>) {
    return this.repo.update(id, updateDTO, { new: true });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
