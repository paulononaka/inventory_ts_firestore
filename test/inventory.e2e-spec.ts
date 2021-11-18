import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { mockFirebase } from './mock-firebase';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    mockFirebase();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/inventory (POST)', () => {
    return request(app.getHttpServer())
      .post('/inventory')
      .send([
        { itemID: 1, itemName: 'Mocked Item 1', quantity: 10 },
        { itemID: 2, itemName: 'Mocked Item 2', quantity: 20 },
      ])
      .expect(201);
  });
});
