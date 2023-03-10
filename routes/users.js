var express = require('express');
//后端路由，用于分配前端的请求
var router = express.Router();

// const {getMd5} = require('../utils/crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//引入第二层
const { login, isAccess,register } = require('../service/usersService');

/* GET users listing. */
//登录

router.post('/login', async function (req, res, next) {
	const {username,passward} = req.body;

	// const newPassward = getMd5(passward);

	const data = await login({username});
	if(data){
		const isRun = bcrypt.compareSync(passward,data[0].passward);
		if(isRun){
			//生成token
			const token = jwt.sign(
				{username}, //需要保存的用户信息
				'123',//秘钥字符串
				{expiresIn: 60*2 }, //设置token的有效期，单位 s
			)
			res.send({
				message:'登录成功',
				status:1,
				token,
			})
		}
		else{
			res.send({
				message:'登录失败',
				status:0,
			})
	
		}
	}else{
		res.send({
			message:'登录失败',
			status:0,
		})
	}
	
	// console.log("dengluxignxi",data[0].passward);

	// res.send();
});

//注册
router.post('/register', async function (req, res, next) {
	// console.log('成功进入登录接口后端');
	
	const {username,passward} = req.body;
	//Md5加密方式
	// const newPassward = getMd5(passward);

	//bcrypt 加密方式
	const newPassward = bcrypt.hashSync(passward,10);
	const data = await register({username,passward:newPassward});
	console.log("新密码",newPassward);
	res.send(data);
});

/* GET home page. */
//验证账号是否存在
router.post('/IsAccess', async function (req, res, next) {
	const { username } = req.body;
	const data =await isAccess(username);
	res.send(data);
});

//是否登录
router.get('/isLogin',async (req, res)=>{
	//1. 获取到token
	const headersToken = req.get('Authorization');
	const token = headersToken.split(' ')[1];
	// 2. 解码token，拿到用户信息
	const {username} = jwt.verify(token,'123');
	res.send({
		message:'身份认证通过',
		status: 1,
		data:username,
	})
})


module.exports = router;
