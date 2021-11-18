import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, '../dotenv') });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const initialized = admin.apps.some((app) => app.name === '[DEFAULT]');
  if (!initialized) {
    const firebaseConfig = {
      credential: admin.credential.cert({
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL,
        privateKey: process.env.PRIVATE_KEY,
      }),
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    };
    admin.initializeApp(firebaseConfig);
  }
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
