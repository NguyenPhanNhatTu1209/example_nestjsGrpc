import { Test, TestingModule } from '@nestjs/testing';
import { UserPostController } from './user-post.controller';
import { UserPostService } from './user-post.service';

describe('UserPostController', () => {
  let controller: UserPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPostController],
      providers: [UserPostService],
    }).compile();

    controller = module.get<UserPostController>(UserPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
