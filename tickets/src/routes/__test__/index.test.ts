import request from "supertest";
import { app } from "../../app";
import { token } from "../../test/token";

const createTicket = () => {
  return request(app)
    .post('/api/tickets')
    .set('Cookie', token())
    .send({
      title: 'test title',
      price: '20'
    });
}
describe("GET /api/tickets", () => {
  it('Should return list of tickets', async()=> {
    await createTicket();
    await createTicket();
    await createTicket();
    const response = request(app)
      .get('/api/tickets')
      .send()
      .expect(200);
    expect((await response).body.length).toEqual(3);
  });
});
