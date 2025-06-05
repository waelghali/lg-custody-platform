const request = require('supertest');
const app = require('../index');
const sequelize = require('../config/database');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('User API', () => {
  it('should register a user', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({
        username: `testuser${Date.now()}`,
        email: `test${Date.now()}@example.com`,
        password: 'test123',
        role: 'user',
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.user).toHaveProperty('id');
    expect(res.body).toHaveProperty('token');
  });

  it('should login a user', async () => {
    const uniqueEmail = `login${Date.now()}@example.com`;
    await request(app)
      .post('/api/users/register')
      .send({
        username: `loginuser${Date.now()}`,
        email: uniqueEmail,
        password: 'login123',
        role: 'user',
      });
    const res = await request(app)
      .post('/api/users/login')
      .send({
        email: uniqueEmail,
        password: 'login123',
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should get all users with valid token', async () => {
    const uniqueEmail = `token${Date.now()}@example.com`;
    await request(app)
      .post('/api/users/register')
      .send({
        username: `tokenuser${Date.now()}`,
        email: uniqueEmail,
        password: 'token123',
        role: 'user',
      });
    const loginRes = await request(app)
      .post('/api/users/login')
      .send({
        email: uniqueEmail,
        password: 'token123',
      });
    const token = loginRes.body.token;
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});