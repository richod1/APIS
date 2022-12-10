const express =require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv').config()
const {errorHandler}= require('./middleware/errorMiddleware')
const connectDB=require('./config/db')
const colors=require('colors')


const port = process.env.PORT || 8000;



connectDB()
const app = express()


app.use(express.json());

app.use(express.urlencoded({extented:false}));
mongoose.set('strictQuery', false);


app.use('/api/goals', require('./routes/goalRoute'))

app.use(errorHandler)  


app.listen(port, ()=>console.log(`server started on port : ${port}`))

