const mongoose = require('mongoose')

const string = ''

const connectDB=(url)=>{
        return mongoose.connect(url)
}

module.exports =connectDB

// .then(()=>console.log(`database Connection Succeeded`))
// .catch((err)=>(console.log(err)
// ))
