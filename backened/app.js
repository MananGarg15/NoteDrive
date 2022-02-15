const express= require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const mongoose=require('mongoose');
const ConnectToMongo=require('./mongoose');
dotenv.config();

const app=express();


app.use(express.json());
app.use(cors());
//api
app.use('/api/notes',require('./routes/notes'));
app.use('/api/auth',require('./routes/auth'))

const URI=process.env.mongooseURI;
// const URI="mongodb+srv://mehulagarwal0001:mehul123@cluster0.wuv1v.mongodb.net/NoteDrive?retryWrites=true&w=majority";
ConnectToMongo(URI);

app.get('/',(req,res)=>{
res.send("Hello Mehul");
})


app.listen(process.env.PORT,()=>{
    console.log("Backened running");
})