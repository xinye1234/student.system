const {studentsModel} = require('./models/studentsModel');
module.exports.getStudents = async function(params){
    // 精确查询
    // const data = await  studentsModel.find(params);
    // 模糊查询
    /* console.log(params.pageSize,params.curentPage); */

    //获取总数据条数
    /* const total = await studentsModel.countDocuments(); */
    const total = (await studentsModel.find({
        [params.result]:{$regex: params.selectContent,$options:'i'}
    })).length;
    //获取查询数据条数

    let pages = Math.ceil( total / params.pageSize );

    /* console.log(pages); */

    const students = await studentsModel.find({
        [params.result]:{$regex: params.selectContent,$options:'i'}
    })/* .populate('classId'); */.populate({
        path: 'classId',
        populate:{ 
            path:'teachersId',
        }
    }).limit(params.pageSize).skip((params.curentPage-1)*params.pageSize)
    // console.log('123124',data);
    /* console.log(total); */
    return {total,pages,students};
};

// 删除学生
module.exports.deletStudents =async (_id)=>{
    // console.log('33',_id)
    const data = await studentsModel.findOneAndDelete(_id );
}

// 新增学生
module.exports.addStudent =async (student)=>{
    const data = await studentsModel.create(student);
    return data;
}

// 修改学生
module.exports.updateStudent = async (student)=>{
    // console.log('三测试',student);
    const data = await studentsModel.updateOne({_id:student._id},student);
}

// 查找学生 返回需要修改的数据
module.exports.getStudentById = async ({_id})=>{
    const data = await studentsModel.findById(_id);
    return data;
}

