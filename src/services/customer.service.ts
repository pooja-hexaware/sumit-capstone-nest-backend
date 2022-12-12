import { Injectable } from '@nestjs/common';
import { Customer } from 'src/models/Customer';
import { CustomerRepository } from 'src/repositories/Customer.repository';

@Injectable()
export class CustomerService {
  constructor(private readonly repo: CustomerRepository) { }

  create(createDTO: Partial<Customer>) {
    return this.repo.create(createDTO);
  }

  findAll() {
    return this.repo.findAll();
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  update(id: number, updateDTO: Partial<Customer>) {
    return this.repo.update(id, updateDTO, { new: true });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
