const {getTeachers,addTeachers} = require('../dao/teachersDao');
module.exports.getTeachers = async () => {
    const data = await getTeachers();

    return {
        message: '教师数据获取成功',
        status:1,
        data
    }
        
}
module.exports.addTeachers = async teacherName=>{
    
    const data = await addTeachers(teacherName);
    if(data._id){
        return {
            status:1,
            message:'添加成功',
        }
    }
    else{
        return{
            status: 0,
            message:'添加失败',
        }
    }
}