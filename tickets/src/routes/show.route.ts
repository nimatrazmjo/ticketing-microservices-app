import { Router } from "express";
import { showTicketController } from "../controllers/ticket.controller";

const router = Router();

router.get('/api/tickets/:id', showTicketController)

export { router as showRouter };