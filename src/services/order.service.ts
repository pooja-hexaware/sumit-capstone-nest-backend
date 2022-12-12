import { Injectable } from '@nestjs/common';
import { Order } from 'src/models/Order';
import { OrderRepository } from 'src/repositories/Order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly repo: OrderRepository) { }

  create(createDTO: Partial<Order>) {
    return this.repo.create(createDTO);
  }

  findAll() {
    return this.repo.findAll();
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  update(id: number, updateDTO: Partial<Order>) {
    return this.repo.update(id, updateDTO, { new: true });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
