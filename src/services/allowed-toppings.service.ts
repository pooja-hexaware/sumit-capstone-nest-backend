import { Injectable } from '@nestjs/common';
import { AllowedToppings } from 'src/models/AllowedToppings';
import { AllowedToppingsRepository } from 'src/repositories/AllowedToppings.repository';

@Injectable()
export class AllowedToppingsService {
  constructor(private readonly repo: AllowedToppingsRepository) { }

  create(createDTO: Partial<AllowedToppings>) {
    return this.repo.create(createDTO);
  }

  findAll() {
    return this.repo.findAll();
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  update(id: number, updateDTO: Partial<AllowedToppings>) {
    return this.repo.update(id, updateDTO, { new: true });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
