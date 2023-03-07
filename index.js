import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'
const app = express();
app.use(express.json());

app.use('/users',usersRoutes);

app.get('/',(req,res)=>{
  res.send('I am server!')
})
const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`Listening to PORT: ${PORT}`);
})