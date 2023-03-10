//连接数据库
const mongoose = require('mongoose');
const dbURI = 'mongodb://127.0.0.1:27017/studentsSystem';//项目需要连接mongodb数据库地址
mongoose.connect(dbURI,{
  useNewUrlParser:true,
  useUnifiedTopology:true
});
//数据库连接成功时触发事件
mongoose.connection.on('connected',function(){
  console.log(dbURI+'数据库链接成功');
});