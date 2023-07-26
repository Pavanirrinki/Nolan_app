const mongoose = require ('mongoose')


const usersschema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const User = mongoose.model('User', usersschema);
module.exports = User;
