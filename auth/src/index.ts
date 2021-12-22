import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';

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

app.all('*',async () => {
  throw new NotFoundError();
});
app.use(ErrorHandler);

const start = () => {
  try {
    console.log('hereeeee')
     mongoose.connect(`mongodb://auth-mongo-service:27017/auth`
    // ,
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true
    // }
    ); 
    console.log('Connected to mongo DB');
  } catch (error) {
    console.error(error,'error');
  }
}

app.listen(3000, () => {

  
  console.log('Listening on port', 3000);
});

start();