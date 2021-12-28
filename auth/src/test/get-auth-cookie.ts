import request from 'supertest';
import { app } from '../app';

async function signUpAndReturnCookie():Promise<string[]> {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
    return response.get('Set-Cookie');
}

export { signUpAndReturnCookie }