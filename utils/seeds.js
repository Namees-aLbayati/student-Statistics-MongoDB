const connection=require('../config/connection');
const {Student,Courses,Assignment}=require('../models');
const Course = require('../models/course');
const ObjectId=require('mongoose')
const idArray=[]
const assignmentsData=[{
    assgntName:'fifth'
},{
    assgntName:'fourth assignment'
}]




// console.time('seeding');
connection.once('open',async()=>{
    await Student.deleteMany({});
    await Course.deleteMany({});
    await Assignment.deleteMany({})

    await Assignment.collection.insertMany(assignmentsData)
    const a=await Assignment.find({},(err,data)=>{

        for(var i=0;i<data.length;i++){
                    idArray.push(data[i])
                    console.log(idArray)

        }
    }).clone().catch(function(err){ console.log(err)})

    // const b=await Student.find({},(err,data)=>{
    //    console.log('j')
    // }).clone().catch(function(err){ console.log(err)})
    const studentData=[
        {
            firstName:'layth',
            lastname:'najm',
            github:'layth@github',
            DOB:'1989-21-06',
            assignments:assignmentsData
            //    assignments: 
    
            
        }]
    


        await Student.collection.insertOne(studentData[0])




})