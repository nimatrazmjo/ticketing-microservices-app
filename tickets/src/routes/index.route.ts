import { Router } from "express";
import { showAllTicketsController } from "../controllers/ticket.controller";

const router = Router();

router.get('/api/tickets',showAllTicketsController);

export { router as IndexRouter };