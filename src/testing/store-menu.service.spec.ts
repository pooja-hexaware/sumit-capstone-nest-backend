import { Test, TestingModule } from '@nestjs/testing';
import { StoreMenuService } from '../services/store-menu.service';

describe('StoreMenuService', () => {
  let service: StoreMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreMenuService],
    }).compile();

    service = module.get<StoreMenuService>(StoreMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
