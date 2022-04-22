const mongoose = require('mongoose')
const coursesSchema=require('./course')
const assignmentSchema=new mongoose.Schema({
  
    assgntName:{
        type:String
    },
    score:{
        type:Number,
        default:()=>Math.floor(Math.random()*(100-70+1)+70)
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },



},{
    toJSON:{
        virtuals:true
    }
});

// assignmentSchema.virtual('collectionsOfAssignment').get(function(){
//     return this.assgntName
// })

// const ass=mongoose.model('ass',assignmentSchema);

const Assignment=mongoose.model('Assignment',assignmentSchema);

module.exports=Assignment;

