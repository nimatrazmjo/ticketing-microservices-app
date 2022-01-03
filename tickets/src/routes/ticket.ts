import { Request, Response, Router } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { Ticket } from "../model/ticket";
const router = Router();

router.get('/api/tickets',async (req: Request, res: Response) => {
  const tickets = await Ticket.find({});
  res.status(200).json(tickets);
});
router.get('/api/tickets/:id',async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id);
  res.status(200).json(ticket);
});
router.post('/api/tickets',async (req: Request, res: Response) => {
  
});
router.put('/api/tickets',async (req: Request, res: Response) => {
  
});

export {router as ticketRouter};