//引入第三层
const {login,isAccess,register} =  require('../dao/usersDao');
module.exports.login =async function(user){
    //调用第三层 userDao.js 中暴露的login方法
    const data = await login(user);
    if(data.length>0){
        return data;   
    }
    else{
        return false;
    }
}

//账号重复判断
module.exports.isAccess = async function(username){
    // console.log('username',username);
    const data = await isAccess(username);
    if(data.length >0){
        return {
            message: '账号已存在',
            status: 0
        }
    }else{
        return {
            message: '合法',
            status: 1
        }
    }
}
module.exports.register = async function(user){
    // console.log('zhangh',user);
    const data = await register(user);
    if(data._id){
        return{
            message:'注册成功',
            status: 1
        }
    }
    return{
        message:'注册失败',
        status: 0
    }
    
}