import express from 'express';
import 'express-async-errors';
import  { json } from 'body-parser';
import { errorHandler } from './middleware/error-handler.middleware';
import cookieSession from 'cookie-session';
import { notFound } from './middleware/not-found.middleware';
import { newTicketRouter } from './routes/new.route';
import { showRouter } from './routes/show.route';
import { IndexRouter } from './routes/index.route';
import { updateTicketRouter } from './routes/update.route';
const app = express();
app.use(json());
app.use(cookieSession({
  signed: false,
  secure: false
}));

//routes
app.use(newTicketRouter);
app.use(showRouter);
app.use(IndexRouter);
app.use(updateTicketRouter);
//not found routes
app.all('*',notFound);
// Error handling middleware
app.use(errorHandler);
export { app }