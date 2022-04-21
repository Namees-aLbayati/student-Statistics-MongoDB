const mongoose=require('mongoose');
const trystudent=require('./student')
const courseSchema=new mongoose.Schema({
   courseName:{
       type:String,
       required:true
   } ,
   inperson:{
       type:Boolean
   },
   startDate:{
       type:Date,
       default:Date.now()
   },
   endDate:{
       type:Date,
       default:()=>new Date(+new Date()+84*24*60*60*1000)
   },
   students:[trystudent]
});


const Course=mongoose.model('Course',courseSchema);
