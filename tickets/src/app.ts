import express, { json, NextFunction, Request, Response } from 'express';
import { CustomError } from './errors/custom-error';
import { errorHandler } from './middleware/error-handler.middleware';
import { ticketRouter } from './routes/ticket';
const app = express();
app.use(json());
app.use(ticketRouter);

// Error handling middleware
app.use(errorHandler);
export { app }