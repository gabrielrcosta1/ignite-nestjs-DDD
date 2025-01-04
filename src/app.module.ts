import { Module } from '@nestjs/common';
import { HtppModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [HtppModule, DatabaseModule],
})
export class AppModule {}
