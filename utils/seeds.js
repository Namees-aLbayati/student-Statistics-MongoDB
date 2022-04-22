const connection=require('../config/connection');
const {Student,Courses,Assignment}=require('../models');
const Course = require('../models/course');
const ObjectId=require('mongoose')
const idArray=[]
console.time('start seeding')

const assignmentsData=[{
    assgntName:'eighths'
},{
    assgntName:'fourth assignment'
}]




// console.time('seeding');
connection.once('open',async()=>{
    await Student.deleteMany({});
    await Course.deleteMany({});
    await Assignment.deleteMany({})

    await Assignment.collection.insertMany(assignmentsData)

    // const b=await Student.find({},(err,data)=>{
    //    console.log('j')
    // }).clone().catch(function(err){ console.log(err)})
    const studentData=[
        {
            firstName:'ghalib',
            lastname:'najm',
            github:'layth@github',
    
            
        },{

            firstName:'salehhh',
            lastname:'moh',
            github:'layth@github',

        }]

     
    


        await Student.collection.insertMany(studentData)
       console.timeEnd('end seed')

process.exit(0)


})