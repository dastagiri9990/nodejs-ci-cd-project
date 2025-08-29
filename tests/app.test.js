// tests/app.test.js
const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
  test('GET /health should return 200', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
  });

  test('GET /api/hello should return message', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toContain('Hello');
  });

  test('GET /api/users should return users array', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.users)).toBe(true);
  });
});
