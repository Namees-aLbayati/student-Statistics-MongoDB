const mongoose = require('mongoose')
const coursesSchema=require('./course')
const assignmentSchema=new mongoose.Schema({
    assignmentId:{
        type:mongoose.Schema.Types.ObjectId,
        default:()=>new Types.ObjectId
    },
    assgntName:{
        type:String
    },
    score:{
        type:Number,
        default:()=>Math.floor(Math.random()*(100-70+1)+70)
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },



});

// const ass=mongoose.model('ass',assignmentSchema);

const Assignment=mongoose.model('Assignment',assignmentSchema);

module.exports=Assignment;

