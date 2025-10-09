const connectdb = require('./db/connect')
const express = require('express')
const app = express()
app.use(express.static('./public'))
const noroute = require('./Middleware/noroute')
const userroutes = require('./Routes/userroutes')
const errorhandler =require('./Middleware/error_handler')
require('dotenv').config()
const port =3000 
const start = async()=>{
    try {
      await connectdb(process.env.MONGO_URL)
      app.listen(port,console.log(`running on port ${port}`) )
    } catch (error) {
        console.log(error);
    }
}
start()
app.use(express.json());
app.use('/api/v1/tasks',userroutes);
app.use(noroute)
app.use(errorhandler)


