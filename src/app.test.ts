import request from 'supertest';
import app from './app';

describe('테스트 root path', () => {
  test('/welcome Test', async () => {
    const response = await request(app).get('/welcome');
    expect(response.statusCode).toBe(200);
  });

  test('/recommendation/dessert Test', async () => {
    const response = await request(app).get('/recommendation/dessert');
    expect(response.statusCode).toBe(200);
  });

  afterAll(() => {
    console.log('Test End');
  });
});
