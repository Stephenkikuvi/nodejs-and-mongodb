const { default: mongoose } = require("mongoose");
const { required } = require("nodemon/lib/config");

const mongoose= require("mongoose")

mongoose.connect("mongodb://localhost:27017/Loginform")
.then(()=>{
console.log("mongo connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LoginSchema= new mongoose.Schema({
    name:{
type:String,
required:true
    },
    Password:{
        type:String,
        required:true
            }
})
  const collection=new mongoose.model("Collection1",)
  module.exportsexports=collection
