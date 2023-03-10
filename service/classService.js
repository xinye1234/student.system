// 三层架构 第二层 服务层
const {addClass,findClass} =require('../dao/classDao');

module.exports.addClass = async (className)=>{
    const data = await addClass(className);
    /* console.log('2',data._id); */

    if(data._id){
        return {
            data,
            status:1,
            message:'添加成功'
        }
   
    }
    else{
        return{  
            data,
            status: 0,
            message:'添加失败'
        }
    }

}
module.exports.findClass = async ()=>{
    const data = await findClass();
    return {
        message:'查询成功',
        status:1,
        data
    }
} 