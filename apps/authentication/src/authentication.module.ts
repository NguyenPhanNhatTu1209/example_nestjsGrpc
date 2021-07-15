import { Module } from '@nestjs/common';
import { TestauthModule } from './testauth/testauth.module';

@Module({
  imports: [TestauthModule],
  controllers: [],
  providers: [],
})
export class AuthenticationModule {}
