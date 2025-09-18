const mongoose = require('mongoose')

const string = 'mongodb+srv://mahi:12345@cluster0.xvigcau.mongodb.net/tarun?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(string)
.then(()=>console.log(`connected to the DB...mongoose.`))
.catch((err)=>console.log(err))
