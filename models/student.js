const mongoose=require('mongoose');

const assignmentSchema=require('./assignment')
const studentSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,

    },
    lastname:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    },
    DOB:{
        type:Date,
        default:Date.now()
    },
    Assignments:[assignmentSchema]

}
);





const Student=mongoose.model('Student',studentSchema);






module.exports=studentSchema