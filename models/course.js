const mongoose=require('mongoose');
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
       default:()=>new Date(+new Date() +28*24*60*60*1000)
   },
});



const Course=mongoose.model('Course',courseSchema);
Course.create({courseName:'new course here',inperson:true},(err,data)=>{
    if(err){
        throw err
    }
    console.log('courses data created')
})
module.exports=courseSchema