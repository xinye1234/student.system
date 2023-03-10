const {getStudents,deletStudents,addStudent,updateStudent,getStudentById} = require('../dao/studentsDao');

//查询
module.exports.getStudents = async function(params){
    /* console.log(params) */
    try {
        const data = await getStudents(params);
        /* console.log(data); */
        return {
            message:'学生数据获取成功',
            status: 1,
            data
        }
    } catch (error) {
        return{
            message:'学生数据获取失败',
            status:0,
            data
        }
    }

};
module.exports.deletStudents = async (studnet)=>{
    try {
        const data = await deletStudents(studnet);
        return{
            message:'删除成功',
            status: 1,
            data
        }  
    } catch (error) {
        return{
            message:'删除失败',
            status: 0,
            data
        } 
    }
    

}
//添加数据
module.exports.addStudent = async (studnet)=>{
    const data = await addStudent(studnet);
    if(data._id){
        
        return{
            message:'添加成功',
            status: 1,
            data
        }
    }
    return{
        message:'添加失败',
        status: 0,
        data
    }
}

//修改学生信息

module.exports.updateStudent = async(student)=>{
    // console.log(student);
    const data = await updateStudent(student);
    return {
        message:'修改成功',
        status: 1,
        data
    }
    
}
// 获取学生信息进行修改
module.exports.getStudentById = async(_id)=>{
    const data = await getStudentById(_id);
    return {
        message:'学生数据获取成功',
        status: 1,
        data
    }
}

