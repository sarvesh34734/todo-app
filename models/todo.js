const mongoose=require("mongoose");

// create a schema to store data
const todoSchema=new mongoose.Schema({
    description:{type:String,required:true,},
    category:{type:String,required:false},
    date:{type:Date,required:true}
})

const Todo=mongoose.model("todo",todoSchema);
module.exports=Todo;