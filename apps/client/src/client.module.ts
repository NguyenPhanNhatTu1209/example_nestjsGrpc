import { Module } from '@nestjs/common';
import { SharedModule } from 'apps/share/shared.module';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from 'apps/share/configService.module';
import { ConfigService } from 'apps/share/services/config.service';
import { MongooseModule } from '@nestjs/mongoose';

const MongooseConfig = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    uri: "configService.get('MONGODB_URI')",
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
  }),
};

@Module({
  imports: [
    SharedModule,
    TerminusModule,
    MongooseModule.forRootAsync(MongooseConfig),
  ],
  controllers: [],
})
export class ClientModule {}
