// 三层架构 第三层 持久层
const {classModel} = require('./models/classModel');
module.exports.addClass = async (className)=>{
    // console.log('3',className);
    const data = await classModel.create(className);
    return data;
}
module.exports.findClass = async ()=>{
    const data = await classModel.find();
    return data;
}
