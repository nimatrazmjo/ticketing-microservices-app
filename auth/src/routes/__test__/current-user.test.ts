import request from 'supertest';
import { app } from '../../app';
import { signUpAndReturnCookie  } from '../../test/get-auth-cookie';

describe('GET /current-user',()=>{
  it('should response with details about the current user', async ()=>{
      const cookie = await signUpAndReturnCookie();  
      const response = await request(app)
        .get('/api/users/current-user')
        .set('Cookie', cookie)
        .expect(200);
      expect(response.body.currentUser.email).toEqual('test@test.com')
  });

  it('should return null for un authenticated user',async () => {
    const response = await request(app)
      .get('/api/users/current-user')
      .send()
      .expect(200);

      expect(response.body.currentUser).toBe(null);
  });
});