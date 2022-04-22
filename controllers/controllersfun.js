
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
)}).then((studentData)=> console.log(studentData))
.catch((err)=>{
    console.log('err')
    console.log(err)

})
        
        
        
        
        
        
        
        }

               

}