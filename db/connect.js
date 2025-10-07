const mongoose = require('mongoose')

//const string = ''

// const connectDB=(url)=>{
//         return mongoose.connect(url)
// }

// module.exports =connectDB

// .then(()=>console.log(`database Connection Succeeded`))
// .catch((err)=>(console.log(err)
// ))

// mongoose.connect(string)
// .then(()=>console.log(`connected to DB ...`))
// .catch((err)=>console.log(err)
// )
const connectdb =(url)=>{
        return mongoose.connect(url)
}
  
module.exports=connectdb