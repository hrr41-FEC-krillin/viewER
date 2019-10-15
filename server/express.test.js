const request = require('supertest');
const app = require('./app.js');

describe('Test the /api/movie path', () => {
  test('It should response the GET request', async (done) => {
    const response = await request(app).get('/api/movie').query({id: 1})
    expect(response.statusCode).toBe(200);
    done();
  });
});
