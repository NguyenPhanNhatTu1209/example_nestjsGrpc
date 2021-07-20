import { Test, TestingModule } from '@nestjs/testing';
import { UserPostService } from './user-post.service';

describe('UserPostService', () => {
  let service: UserPostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPostService],
    }).compile();

    service = module.get<UserPostService>(UserPostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
