import request from "supertest";
import { app } from "../../app";
import { mongoId } from "../../helpers/generate-mongo-id";
import { token } from "../../test/token";

describe("PUT /api/tickets/:id", () => {
  const data = {
    title: "title title",
    price: "20",
  };

  const updateData = {
    title: "title title update",
    price: "30",
  };

  it("Should return 404 if the provided id does not exists", async () => {
    const response = await request(app)
      .put(`/api/tickets/${mongoId()}`)
      .set("Cookie", token())
      .send(data)
      .expect(404);
  });
  it("Should return 401 if the user is not authenticated", async () => {
    const response = await request(app)
      .put(`/api/tickets/${mongoId()}`)
      .send(data)
      .expect(401);
  });
  it("Should return 401 if the user does not own the ticket", async () => {
    const response = await request(app)
      .post("/api/tickets")
      .set("Cookie", token())
      .send(data)
      .expect(201);

    const responseUpdate = await request(app)
      .put(`/api/tickets/${response.body.id}`)
      .set("Cookie", token())
      .send(updateData)
      .expect(401);
  });
  it("Should return 400 if the user provided invalid title or price", async () => {
    const response = await request(app)
      .put(`/api/tickets/${mongoId()}`)
      .set("Cookie", token())
      .send({})
      .expect(422);
  });
  it("update the ticket provided valid inputs", async () => {
    const session = token();
    const response = await request(app)
      .post("/api/tickets")
      .send(data)
      .set("Cookie", session)
      .expect(201);

    const updateTicket = await request(app)
      .put("/api/tickets/" + response.body.id)
      .set("Cookie", session)
      .send(updateData)
      .expect(200);

    expect(updateTicket.body.title).toEqual(updateData.title);
    expect(updateTicket.body.price).toEqual(updateData.price);
  });
});
