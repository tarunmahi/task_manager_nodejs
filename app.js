const connectDB=require('./db/connect.js')
const express = require('express')
const app = express()
const userroutes = require('./Routes/userroutes')
require('dotenv').config()
app.use(express.json());
//app.get('/',(req,res)=>res.send(`home`));
app.use('/api/v1/tasks',userroutes);
const port =3000

const start =async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(3000,()=>{
            console.log(`running on port ${port}`);
            } )

    } catch (error) {
        console.log(error);
        
    }
}

start()





