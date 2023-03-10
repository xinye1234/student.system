const {teachersModel} = require('./models/teachersModel');

module.exports.getTeachers = async() =>{
    return await teachersModel.find();
}

module.exports.addTeachers =async teacherName=>{
    const data = await teachersModel.create(teacherName);
    return data;
}