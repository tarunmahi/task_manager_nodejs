
// // const name1="tarun";
// const names1 = require('./names');
// const sayhii = require('./function');
// // setInterval(()=>{
// //     console.log('hello mr name ');
    
// // },5000)
// sayhii(names1.name1);


// // const hiiname= (name)=>{
// //     console.log(`hello mr ${name}`);
// // }

// // hiiname('varun');
// const http =require('http');
// const names = require('./names')
// const server = http.createServer((req,res)=>{
//     // res.write(`hello peers ${names.name1}`);
//     // res.end();
//     if(req.url==='/'){
//         res.end('Home');
//     }
//     if(req.url==='/about'){
//         res.end('About Page')
//     }
//         res.end('oops error');
    
// })

// server.listen(5000);
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



