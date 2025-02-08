


const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    designation:String,
    imgname:{
        type:String,
        default:"",
    },
})
module.exports=mongoose.model("user", UserSchema);