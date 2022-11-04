import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loadEnvironment } from './libs/env';

async function bootstrap() {
  loadEnvironment();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
