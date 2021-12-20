import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { currentUserRounter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRounter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { ErrorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(currentUserRounter);
app.use(signinRouter);
app.use(signoutRounter);
app.use(signupRouter);
console.log('calling')
app.all('*',async () => {
  console.log('Called');
  throw new NotFoundError();
});
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log('Listening on port', 3000);
});