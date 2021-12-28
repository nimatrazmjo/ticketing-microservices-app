import request from "supertest";

import { app } from "../../app";

describe(' POST signin', () => {
  it('should return 401 if user is not exists', async () => {
      await request(app).post('/api/users/signin')
        .send({
          email: 'test@test.com',
          password: 'password'
        })
        .expect(401)
  });
  it('should return 400 if user entered invalid email', async () => {
    await request(app).post('/api/users/signin')
    .send({
      email: 'testtest.com',
      password: 'password'
    })
    .expect(400)   
  });
  
  it('should return 400 if user entered invalid password', async () => {
    await request(app).post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'p'
    })
    .expect(401)   
  });

  it('should return 200 if user entered valid credentials', async () => {
    await request(app).post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201)   
  
  await request (app).post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(200)   
  });
});