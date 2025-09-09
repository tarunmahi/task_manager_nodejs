const http =require('http');
const names = require('./names')
const server = http.createServer((req,res)=>{
    res.write(`hello peers ${names.name3}`);
    res.end();
})

server.listen(5000);