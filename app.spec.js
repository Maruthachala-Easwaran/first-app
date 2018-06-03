require('should');
const request = require('supertest');
const app = require('./app');

describe('App', () => {
  it('should return Pong when requested with ping', (done) => {
    request(app)
      .get('/ping')
      .expect(200)
      .end((err, res) => {
        // console.log(res);
        res.text.should.be.exactly('pong');
        done(err);
      });
  });
});
