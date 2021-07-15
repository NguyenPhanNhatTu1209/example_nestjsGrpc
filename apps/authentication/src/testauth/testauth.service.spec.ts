import { Test, TestingModule } from '@nestjs/testing';
import { TestauthService } from './testauth.service';

describe('TestauthService', () => {
  let service: TestauthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestauthService],
    }).compile();

    service = module.get<TestauthService>(TestauthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
