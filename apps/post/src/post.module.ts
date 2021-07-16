import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from 'apps/share/services/config.service';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://nguyenphannhattu:Tu123@cluster0.klpx7.mongodb.net/be-whoru?retryWrites=true&w=majority"),],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
