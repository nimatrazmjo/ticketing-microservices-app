import mongoose from 'mongoose';
import { app } from './app';
const start = () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT key is not define');
  }
  try {
      mongoose.connect(`mongodb://auth-mongo-service:27017/auth`); 
      console.log('Connected to mongo DB');
  } catch (error) {
    console.error(error,'error');
  }
}

app.listen(3000, () => {

  
  console.log('Listening on port', 3000);
});

start();