import { Injectable } from '@nestjs/common';
import { Store } from 'src/models/Store';
import { StoreRepository } from 'src/repositories/Store.repository';

@Injectable()
export class StoreService {
  constructor(private readonly repo: StoreRepository) { }

  create(createDTO: Partial<Store>) {
    return this.repo.create(createDTO);
  }

  findAll() {
    return this.repo.findAll();
  }

  findOne(id: string) {
    return this.repo.findOne(id);
  }

  update(id: number, updateDTO: Partial<Store>) {
    return this.repo.update(id, updateDTO, { new: true });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
