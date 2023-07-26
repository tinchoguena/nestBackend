// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { firebaseConfig } from './firebase.config';
import { initializeApp } from 'firebase/app';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  initializeApp(firebaseConfig);
  // const whitelist = ['http://localhost:3000', 'http://www.localhost:3000'];
  app.enableCors();
  // app.enableCors({
  //   origin: function (origin, callback) {
  //     if (whitelist.indexOf(origin) !== -1) {
  //       console.log('allowed cors for:', origin);
  //       callback(null, true);
  //     } else {
  //       console.log('blocked cors for:', origin);
  //       callback(new Error('Not allowed by CORS'));
  //     }
  //   },
  //   allowedHeaders:
  //     'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, Access-Control-Allow-Origin',
  //   methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
  //   // credentials: true,
  // });
  await app.listen(8081);
}
bootstrap();
