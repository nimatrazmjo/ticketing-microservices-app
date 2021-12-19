import express from 'express';
import { json } from 'body-parser';
import { currentUserRounter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRounter } from './routes/signout';
import { signupRouter } from './routes/signup';

const app = express();
app.use(json());

app.use(currentUserRounter);
app.use(signinRouter);
app.use(signoutRounter);
app.use(signupRouter);

app.listen(3000, () => {
  console.log('Listening on port', 3000);
});