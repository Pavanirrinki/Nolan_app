const express = require("express")
const allroutes = require("./Routes/Allroutes")
const mongoose = require("mongoose")
const cors = require("cors")
const jwt = require("jsonwebtoken")

require("dotenv").config()

const app= express()
app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.use('/',allroutes)
app.use(express.urlencoded({extended:true}))
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then
(()=>console.log("DB CONNECTED8"))





const PORT = process.env.PORT||4040
console.log(PORT)
app.listen(PORT,()=>{
     console.log("server running",PORT)
})
