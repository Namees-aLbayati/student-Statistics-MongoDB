const express = require('express');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const {studentData,createAssgnmt,createCourses,getCourse}=require('./controllers/controllersfun')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.route('/').get(studentData).post(createAssgnmt)
app.route('/course').get(getCourse).post(createCourses)










// app.get('/myget', (req, res) => {
//     student.find({}).exec((err,data)=>{
//       res.send(data)
    
//     })
// })








db.once('open', () => {
    app.listen(PORT, () => {
        console.log('listening on 3001 namees')
    })
})