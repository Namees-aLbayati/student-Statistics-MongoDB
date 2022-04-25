
const { User } = require('../../25-Ins_CRUD-Subdoc/models')
const { Student, Assignment, Course } = require('../models')


module.exports = {
    studentData(req, res) {
        Student.find({}).populate('assignments').then((data) => {
            res.send(data)
        })
    },

    createAssgnmt(req, res) {

        Assignment.create(req.body)
            .then((assignmentData) => {

return Student.findOneAndUpdate(
    {_id:req.body.studentId},
    {$addToSet:{assignments:assignmentData._id}},
    {new:true}
)}).then((studentData)=> res.json(studentData))
.catch((err)=>{
    console.log('err')
    console.log(err)

})},
// createCourses(req,res){
// Course.create(req.body).then((result)=>{
//  return Course.findOneAndUpdate(
//         {_id:req.body.courseId},
//         {$addToSet:{studentsInfo:{_id:result._id}}},
//         {new:true}
//     )

// })
// }   
//add course to student model

createCourses(req,res){

Student.create(req.body).then((studentData)=>{
    return Course.findOneAndUpdate(
        {_id:req.body.courseId},
        {$addToSet:{studentsInfo:{_id:studentData._id}}},
        {new:true}
    )
}).then((data)=> res.json(data)).catch((err)=>[
    console.log(err)
])



},
getCourse(req,res){
    Course.find({}).populate('studentsInfo').then((data)=>{
        res.json(data)
    })
},
findoneUser(req,res){
    Student.findOne({_id:req.params.userID}).then((result)=>{
        res.json(result)
    })


} ,

updateAssignment(req,res){
    console.log(req.params.userID,'update here')
    Assignment.findOneAndUpdate(
        {_id:req.params.userID},
        {$set:req.body},
        {runValidators:true,new:true}

    ).then((result)=>{
        res.json(result)
    })

}


               

}