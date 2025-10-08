const mongoose =require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"must need a name"],
        trim: true,
        maxlength : [20,"max length is 20"]
    },
    completed: {
        type:Boolean,
        default:false
    }
})

module.exports =mongoose.model('Tasks',schema);