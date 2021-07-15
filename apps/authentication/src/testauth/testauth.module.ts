import { Module } from '@nestjs/common';
import { TestauthService } from './testauth.service';
import { TestauthController } from './testauth.controller';

@Module({
  controllers: [TestauthController],
  providers: [TestauthService],
})
export class TestauthModule {}
