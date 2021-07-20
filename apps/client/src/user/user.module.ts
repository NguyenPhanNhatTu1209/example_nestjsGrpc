import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { LoggerService } from 'apps/share/services/logger.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
