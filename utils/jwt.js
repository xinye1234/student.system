const expressJWT = require('express-jwt');

const jwtAuth = expressJWT({
    secret: '123',//生成token时配置的秘钥字符串
    algorithms: ['HS256'], //设置jwt的算法为HS256
    credentialsRequired: false,
}).unless({
    //用于设置不需要验证token的路径
    path: ['/users/login','/users/register','/users/isAccess']
    
});

module.exports = jwtAuth;