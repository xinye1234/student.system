const {userModel} = require('./models/usersModel');

module.exports.login =  async function(user){
    const data = await userModel.find(user);
    // console.log(data);
    return data;
} 

//
module.exports.isAccess = async function(username){
    const data = await userModel.find({username});
    // console.log(data);
    return data;

}
module.exports.register = async function(user){
    // console.log('加yonghu',user)
    return await userModel.create(user);
    
}
