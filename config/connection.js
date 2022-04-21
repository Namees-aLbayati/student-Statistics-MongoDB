const {connection,connect}=require('mongoose');
const connectionString=process.env.MONGODB_URI||'mongodb://localhost:27017/nameesmongoDB'
connect(connectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
module.exports=connection;