import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";

import { body } from "express-validator";
import { validate } from "../middleware/validation.middleware";
import { createNewTicketController } from "../controllers/ticket.controller";

const router = Router();

router.post(
  "/api/tickets",
  authMiddleware,
  [
    body("title").trim().notEmpty().withMessage("Title is required"),
    body("price").trim().notEmpty().withMessage("Price is required"),
  ],
  validate,
  createNewTicketController
);

export { router as newTicketRouter };
