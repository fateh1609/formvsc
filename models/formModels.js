const mongoose = require('mongoose')

const form = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    fathersName:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now 
    }
})

module.exports = mongoose.model('tabel',form)