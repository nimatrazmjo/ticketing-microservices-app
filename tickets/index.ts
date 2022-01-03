import mongoose from 'mongoose';
import 'express-async-errors';
import { app } from "./src/app";
import { DBConnectionError } from "./src/errors/db-connection-error";
const PORT = process.env.PORT || 3000;

mongoose.connection.once('open',()=> {
  console.log('Ticket service connected to DB');
})

const  start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    app.listen(PORT,()=>{
      console.log('Listening to Ticketing service', PORT);
    }); 
  } catch (error) {
    throw new DBConnectionError()
  }
}

start();