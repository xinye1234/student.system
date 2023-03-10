//数据库相关配置
//1. 定义数据集合的结构：定义出集合中数据有哪些属性，属性的类型
const {Schema,model} = require('mongoose');
const studentsSchema = new Schema({
  name: String,
  age: String,
  gender:String,
  //用于关联class集合
  classId: {
    type: Schema.Types.ObjectId,
    //ref 用于设置关联集合的模型名称
    ref: 'classModel'
  },
  imagesName:String,
},{versionKey:false});
//2. 定义数据类型集合的模型，将schema和数据库中的集合关联起来
//model('模型名称'，schema名称，'数据库中集合的名称');
const studentsModel = model('sutdentsModel',studentsSchema,'studnets');
//暴露模型
module.exports.studentsModel = studentsModel;