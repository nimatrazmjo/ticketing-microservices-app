import { app } from "./src/app";
const PORT = process.env.PORT || 3000;

function start() {
  app.listen(PORT,()=>{
    console.log('Listening to Ticketing service', PORT);
  });
}

start();