import { Test, TestingModule } from '@nestjs/testing';
import { TestauthController } from './testauth.controller';
import { TestauthService } from './testauth.service';

describe('TestauthController', () => {
  let controller: TestauthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestauthController],
      providers: [TestauthService],
    }).compile();

    controller = module.get<TestauthController>(TestauthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
