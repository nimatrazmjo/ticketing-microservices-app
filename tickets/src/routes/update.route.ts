import { Router } from "express";
import { body } from "express-validator";
import { updateTicketController } from "../controllers/ticket.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { validate } from "../middleware/validation.middleware";
const router = Router();

router.put(
  "/api/tickets/:id",
  [
    body("title").trim().notEmpty().withMessage("Title is required"),
    body("price").trim().notEmpty().withMessage("Price is required"),
  ],
  validate,
  authMiddleware,
  updateTicketController
);

export { router as updateTicketRouter };
