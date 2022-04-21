const mongoose=require('mongoose');
const coursesSchema1=require('./course')
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
    Assignments:[assignmentSchema],
    coursesInfo:coursesSchema1


},
);





const Student=mongoose.model('Student',studentSchema);

const assignmentData={assgntName:"namees assignments"}
const newData={courseName:'seeds course',inperson:false}
Student.create({firstName:"ayla ",lastname:"mohammed",github:"namees-github@github.com",DOB:'1992-08-01',Assignments:assignmentData,coursesInfo:newData},(err,data)=>{
    if(err){
        throw err
    }
    console.log(data)
})




module.exports=Student