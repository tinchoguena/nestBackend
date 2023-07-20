// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { firebaseConfig } from './firebase.config';
import { initializeApp } from 'firebase/app';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initializeApp(firebaseConfig);

  await app.listen(8081);
}
bootstrap();
