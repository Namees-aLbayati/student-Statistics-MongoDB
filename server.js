const express = require('express');
const db = require('./config/connection');
const student = require('./models/student');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/mypost', (req, res) => {
    const a=req.body.firstName;
    const b=req.body.lastname;
    const c=req.body.github
console.log(req.body.firstName)
    student.find({}).exec((err, data) =>{
for(var i=0;i<data.length;i++){
if(a===data[i].firstName){
      res.send('dup[licated')
      return;
}
  
}
student.create({
    firstName:a,
    lastname:b,
    github:c

},
(err,data)=>{
    res.send(data)
  
})









    })


        


})



app.post('/mypost/:new',(req,res)=>{
    const a=new student({firstName:req.params.new,lastname:req.body.lastname,github:req.body.github})
a.save();

const responseGetInstance = a.get('github', String);
console.log(
  `The value of the totalStock for this document in string form is ${responseGetInstance}`
);
a.getDocumentInfo()


// const addmethod=a.get('totalStock',String);
// `The value of the totalStock for this document in string form is ${getDocumentInfo}`
// a.getDocumentInfo()
})








app.get('/myget', (req, res) => {
    student.find({}).exec((err,data)=>{
      res.send(data)
    })
})








db.once('open', () => {
    app.listen(PORT, () => {
        console.log('listening on 3001 namees')
    })
})