import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import cookieSession from 'cookie-session';

import { currentUserRounter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRounter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { ErrorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
     signed: false,
    secure: true
  }));
app.use(currentUserRounter);
app.use(signinRouter);
app.use(signoutRounter);
app.use(signupRouter);

app.all('*',async () => {
  throw new NotFoundError();
});
app.use(ErrorHandler);

export { app }