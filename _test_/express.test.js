const request = require('supertest');
const app = require('../server/app.js');

describe('Test the /api/movie path', () => {
  let response;
  let responseTwo;
  beforeAll( async (done) => {
    response = await request(app).get('/api/movie').query({ id: 1 });
    responseTwo = await request(app).get('/api/movie').query({id: 6});
    done();
  });

  test('Should respond to GET request', () => {
    expect(response.statusCode).toBe(200);
  });

  test('Should respond with an array', () => {
    expect(Array.isArray(response.body)).toBe(true);
  });

  expect.extend({
    toBeWithinRange(received, min, max) {
      const pass = received >= min && received <= max;
      if (pass) {
        return {
          pass: true
        };
      } else {
        return {
          message: () => `expected ${received} to be within ${min} - ${max}`,
          pass: false
        };
      }
    }
  });

  test('Should have 20-30 casts', () => {
    expect(response.body.length).toBeWithinRange(20, 30);
  });

  test('Should respond with 404 when movie does not exist', () => {
    expect(responseTwo.statusCode).toBe(404);
  })

});
