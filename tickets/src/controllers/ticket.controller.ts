import { Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { NotFoundError } from "../errors/not-found-error";
import { Ticket } from "../model/ticket";

const createNewTicketController = async (req: Request, res: Response) => {
  try {
    const { title, price } = req.body;
    const ticket = Ticket.build({
      title,
      price,
      userId: req.currentUser!.id,
    });
    await ticket.save();
    res.status(201).json(ticket);
  } catch (error: any) {
    throw new BadRequestError(error?.message);
  }
};

const showTicketController = async (req: Request, res: Response) => {
  try {
    
    const response = await Ticket.findById(req.params.id);
    if (!response) {
      return res.status(404).json([{message: 'Tickets not found'}])
    }
    res.status(200).json(response);

  } catch (error: any) {
    throw new BadRequestError(error.message);
  }
};

const showAllTicketsController = async (req: Request, res: Response) => {
  res.send(await Ticket.find({}));
}

export { createNewTicketController, showTicketController, showAllTicketsController };
