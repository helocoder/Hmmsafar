const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const User= require('./db/models/userSchema')
const dotenv = require("dotenv")
const app = express();

app.use(cors());
// app.use(require('./router/auth'));
app.use(bodyParser.json());

const middleware = (req,res,next)=>{
  console.log("Hello from middleware");
  next();
}

app.get('/',(req,res)=>{
  res.send('hello world from the server')
})

app.post('/user-info ', cors({
  origin: 'http://localhost:3000'
}),(req,res)=>{
  res.send('this is post request :)')
  console.log(req.body);
  const data = req.body;
  res.send('Form Submitted');
})
// .then(res => {
//   // handle the response data here
//   console.log(res.data);
// })
// .catch(err => {
//   // handle any errors here
//   console.error(err);
// });


//----------------------Database Connection ---------------------------//
dotenv.config({ path: './config.env'});
const DB = process.env.DATABASE;
mongoose.connect(DB,{
  // useNewUrlParser:true,
  // useCreateIndex:true,
  // useUnifiedTopology:true,
  // useFindAndModify:false,

}).then(()=>{
  console.log(`connection success`);
}).catch((err)=>console.log("no connection"));





app.listen(8020, () => {

  console.log("Server listening on port 8020");
});
