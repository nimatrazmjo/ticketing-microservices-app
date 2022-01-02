import express from 'express';
import ticketRouter from './routes/ticket';
const app = express();

app.use(ticketRouter);

export { app }