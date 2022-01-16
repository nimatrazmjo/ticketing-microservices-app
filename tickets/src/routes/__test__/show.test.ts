import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';
import { Ticket } from '../../model/ticket';
import { token } from '../../test/token';

describe("GET /api/tickets/:id", () => {
  const API = '/api/tickets';
  const id = new mongoose.Types.ObjectId();
  it('should return 404 if the ticket not found', async () => {
    await request(app)
      .get(`/api/tickets/${id}`)
      .expect(404)
  });

  it('Should return 200 if the  tickets records found', async ()=> {

      const title = 'ticket title'; 
      const price = "20"
      
      const response = await request(app)
        .post(API)
        .set('Cookie', token())
        .send({title, price})
        .expect(201);
      
      const ticketResponse = await request(app)
        .get(`${API}/${response.body.id}`)
        .expect(200);

        expect(ticketResponse.body.title).toBe(title);
        expect(ticketResponse.body.price).toBe(price);
  });
});
