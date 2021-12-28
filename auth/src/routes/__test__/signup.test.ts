import request from "supertest";

import { app } from "../../app";

describe(' POST signup', () => {
  it('should return 201 if user successfuly inserted', async () => {
    return request(app)
      .post('/api/users/signup')
      .send({
        email: "test@test.com",
        password: "password"
      })
      .expect(201);
  });
  it('should return 400 if invalid email passed', async () => {
    return request(app)
      .post('/api/users/signup')
      .send({
        email: "test.com.com",
        password: "password"
      })
      .expect(400);
  });

  
  it('should return 400 if invalid password passed', async () => {
    return request(app)
      .post('/api/users/signup')
      .send({
        email: "test@test.com",
        password: "p"
      })
      .expect(400);
  });


  it('should return 400 if email of password does not passed', async () => {
    return request(app)
      .post('/api/users/signup')
      .send({
        email: "test@test.com",
        password: "p"
      })
      .expect(400);
  });
  it('should disallow duplicate emails', async () => {
    await  request(app)
      .post('/api/users/signup')
      .send({
        email: "test@test.com",
        password: "password"
      })
      .expect(201);
    await request(app)
      .post('/api/users/signup')
      .send({
        email: "test@test.com",
        password: "password"
      })
      .expect(401);
  });

  it('should set a cookie after successful signup', async () => {
    const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: "test@test.com",
      password: "password"
    })
    .expect(201);

    expect(response.get('Set-Cookie')).toBeDefined();
  });
});

