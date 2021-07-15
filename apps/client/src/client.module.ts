import { Module } from '@nestjs/common';
import { SharedModule } from 'apps/share/shared.module';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [SharedModule, TerminusModule],
})
export class ClientModule {}
