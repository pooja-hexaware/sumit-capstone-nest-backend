import { Injectable } from '@nestjs/common';
import { StoreMenu } from 'src/models/StoreMenu';
import { StoreMenuRepository } from 'src/repositories/StoreMenu.repository';

@Injectable()
export class StoreMenuService {
  constructor(private readonly repo: StoreMenuRepository) { }

  create(createDTO: Partial<StoreMenu>) {
    return this.repo.create(createDTO);
  }

  findAll() {
    return this.repo.findAll();
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  update(id: number, updateDTO: Partial<StoreMenu>) {
    return this.repo.update(id, updateDTO, { new: true });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
