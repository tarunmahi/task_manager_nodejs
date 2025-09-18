require('./db/db')
const express = require('express')
const app = express()
const userroutes = require('./Routes/userroutes')

app.use(express.json());
//app.get('/',(req,res)=>res.send(`home`));
app.use('/api/v1/tasks',userroutes);
const port =3000
app.listen(3000,()=>{
    console.log(`running on port ${port}`);
} )



