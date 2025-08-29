const request = require('supertest');
const app = require('../src/app');

describe('Hello World API', () => {
  test('GET / should return Hello World message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World from Node.js & Express 🚀');
  });
});
