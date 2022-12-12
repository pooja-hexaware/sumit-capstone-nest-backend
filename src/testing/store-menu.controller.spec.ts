import { Test, TestingModule } from '@nestjs/testing';
import { StoreMenuController } from './store-menu.controller';
import { StoreMenuService } from './store-menu.service';

describe('StoreMenuController', () => {
  let controller: StoreMenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreMenuController],
      providers: [StoreMenuService],
    }).compile();

    controller = module.get<StoreMenuController>(StoreMenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
