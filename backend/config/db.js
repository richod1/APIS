const mongoose=require('mongoose')

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect('mongodb+srv://frimp:silverdollor%401@apicluster.0uiurr0.mongodb.net/fimpdb?retryWrites=true&w=majority')

        console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline)
    }catch (error){
        console.log(error);
        process.exit(1)
    }
}

module.exports=connectDB