import { Injectable } from '@nestjs/common';
import { Menu } from 'src/models/Menu';
import { MenuRepository } from 'src/repositories/Menu.repository';

@Injectable()
export class MenuService {
  constructor(private readonly repo: MenuRepository) { }

  create(createDTO: Partial<Menu>) {
    return this.repo.create(createDTO);
  }

  findAll() {
    return this.repo.findAll();
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  update(id: number, updateDTO: Partial<Menu>) {
    return this.repo.update(id, updateDTO, { new: true });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
