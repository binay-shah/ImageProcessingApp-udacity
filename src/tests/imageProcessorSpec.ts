import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async done => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    done();
  }),
    it('gets the api endpoint', async done => {
      const response = await request.get(
        '/api/images?filename=fjord&width=200&height=200'
      );
      expect(response.status).toBe(200);
      done();
    });
});
