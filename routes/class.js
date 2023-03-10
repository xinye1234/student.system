// 三层架构 表现层
var express = require('express');
var router = express.Router();
const {addClass,findClass } =require('../service/classService');
/* GET home page. */

/* 添加班级 */
router.post('/addClass', async function (req, res, next) {
    console.log(req.body.teachersId);
    const data = await addClass(req.body);
    /* console.log("12323547",data); */
    res.send(data);
});


router.get('/findClass',async function(req, res, next) {
    /* console.log('123'); */
    const data = await findClass();
   
    res.send(data);

});

module.exports = router;