import { Test, TestingModule } from '@nestjs/testing';
import { AllowedToppingsController } from '../controllers/allowed-toppings.controller';
import { AllowedToppingsService } from '../services/allowed-toppings.service';

describe('AllowedToppingsController', () => {
  let controller: AllowedToppingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllowedToppingsController],
      providers: [AllowedToppingsService],
    }).compile();

    controller = module.get<AllowedToppingsController>(AllowedToppingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
