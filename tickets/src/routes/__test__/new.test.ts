import request from "supertest";
import { app } from "../../app";
import { token } from "../../test/token";
describe('POST /api/tickets', () => {
  const NEW_API = '/api/tickets';
  const DATA = {
    title: 'new ticket',
    price: '10'
  };
  
  it('should not return 404 if /api/tickets routes defined', async ()=> {
    
    const response = await request(app)
      .post(NEW_API)
      .send({});
    
    expect(response.status).not.toEqual(404)


  });
  it('should return 401 if the user is not authenticated', async ()=> {
      const response = await request(app)
        .post(NEW_API)
        .send({});
      expect(response.statusCode).toBe(401)
  });

  it('should not return 401 if an authenticated user sent', async ()=> {
    const response = await request(app)
    .post(NEW_API)
    .set('Cookie', token())
    .send({});
    expect(response.statusCode).not.toEqual(401)
  });


  
  it('should return 422 if the title has not been passed', async ()=> {
    const response = await request(app)
      .post(NEW_API)
      .set('Cookie', token())
      .send({
        price: '10$'
      });
    expect(response.statusCode).toBe(422);
  });

  it('should return 422 if the price has not been passed', async ()=> {
    const response = await request(app)
      .post(NEW_API)
      .set('Cookie', token())
      .send({
        price: '10$'
      });
    expect(response.statusCode).toBe(422);
  });

  it('should return 201 if a ticket record successfully created ', async ()=> {
    const response = await request(app)
      .post(NEW_API)
      .set('Cookie', token())
      .send(DATA);
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe(DATA.title);
    expect(response.body.price).toBe(DATA.price);
  });

});