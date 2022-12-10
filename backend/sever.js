const express =require('express')
const mongoose =require ('mongoose')

const port = process.env.PORT || 8000;
const app = express()


app.use(express.json());

app.use(express.urlencoded({extented:false}))



app.use('/api/goals', require('./routes/goalRoute'))

 
app.listen(port, ()=>console.log(`server started on port : ${port}`))

