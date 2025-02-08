

const mongoose=require("mongoose");
const TaskSchema=new mongoose.Schema({
    tasktitle:String,
    completiondays:Number,
    taskdescription:String,
    taskstatus:{
        type:String,
        default:"Not Submitted",
    },
    report:{
        type:String,
        default:"Pending",
    },
    empid:{type: mongoose.Schema.Types.ObjectId, ref: "user"}
})
module.exports=mongoose.model("emptask", TaskSchema)