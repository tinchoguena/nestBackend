// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { firebaseConfig } from './firebase.config';
import { initializeApp } from 'firebase/app';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  initializeApp(firebaseConfig);
  const whitelist = ['http://localhost:3000', 'http://www.localhost:3000'];
  app.enableCors({
    origin: whitelist,
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
  });
  await app.listen(8081);
}
bootstrap();
