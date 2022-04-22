const { Schema, model } = require('mongoose');

const studentSchema=new Schema({
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
    assignments: [{ type: Schema.Types.ObjectId, ref: 'Assignment' }],

   


},
{
    toJSON:{
        virtuals:true
    },
    id:false
}
);


// studentSchema.virtual('fullName').get(function () {
//     return this.firstName+this.lastname
//   });





const Student=model('Student',studentSchema);

// const newData={courseName:'seeds course',inperson:false}
// Student.create({firstName:"ayla ",lastname:"mohammed",github:"namees-github@github.com",DOB:'1992-08-01',Assignments:assignmentData,coursesInfo:newData},(err,data)=>{
//     if(err){
//         throw err
//     }
//     console.log(" added success")
// })





module.exports=Student