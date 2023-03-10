//数据库相关配置
//1. 定义数据集合的结构：定义出集合中数据有哪些属性，属性的类型
const {Schema,model} = require('mongoose');
const userSchema = new Schema({
  username:String,
  passward: String
},{versionKey:false});
//2. 定义数据类型集合的模型，将schema和数据库中的集合关联起来
//model('模型名称'，schema名称，'数据库中集合的名称');
const userModel = model('userModel',userSchema,'users');
//暴露模型
module.exports.userModel = userModel;