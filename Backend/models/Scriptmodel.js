const mongoose = require ('mongoose')

const scriptschema = new mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    plot:{
        type:String,
        required:true
    },
    screenplaytitle:{
        type:String,
        required:true
    },
    Genere:{
        type:Array,
        required:true
    },
    File:{
        type:Object,
        required:true
    }
})

const Script = mongoose.model('Script', scriptschema);
module.exports = Script;
