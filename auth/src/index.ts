import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/api/users/currentuser',(req, res) => {
console.log('called');
  res.send("Yeah, Hello");
});
app.listen(3000, () => {
  console.log('Listening on port', 3000);
  
});