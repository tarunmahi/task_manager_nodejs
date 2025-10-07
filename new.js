const express = require('express')
const app = express();


app.get('/hello',(req,res)=>{
    res.send("hello world");
})

//app.get('/api/v1/tasks');
//app.post('/api/v1/tasks');
//app.get('/api/v1/tasks/:id');
//app.delete('/api/v1/tasks/:id');
//app.patch('/api/v1/tasks/:id);

app.listen(3000,()=>{
    console.log(`listening on port 3000`);
})