import mongoose from 'mongoose';
import { app } from './app';
const start = () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT key is not define');
  }
 if (!process.env.MONGO_URI) {
   throw new Error ('MONGO_URL must be define');
 }
  try {
      mongoose.connect(process.env.MONGO_URI!); 
      console.log('Connected to mongo DB');
  } catch (error) {
    console.error(error,'error');
  }
}

app.listen(3000, () => {  
  console.log('Listening on port', 3000);
});

start();