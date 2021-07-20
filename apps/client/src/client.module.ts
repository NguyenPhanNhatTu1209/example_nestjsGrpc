import { Module } from '@nestjs/common';
import { SharedModule } from 'apps/share/shared.module';
import { TerminusModule } from '@nestjs/terminus';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { UserPostModule } from './user-post/user-post.module';

@Module({
  imports: [
    SharedModule,
    TerminusModule,
    PostModule,
    UserModule,
    UserPostModule,
  ],
  controllers: [],
  providers: [],
})
export class ClientModule {}
