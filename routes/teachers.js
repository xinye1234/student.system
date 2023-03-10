var express = require('express');
var router = express.Router();

const { getTeachers , addTeachers} = require('../service/teachersService');
/* GET home page. */

router.get('/getTeachers',async function(req, res, next) {
    const data = await  getTeachers();
    /* console.log("查询数据",data); */
    res.send(data);
});
router.post('/addTeachers',async function(req, res, next) {
    const data = await  addTeachers(req.body);
    res.send(data);
});

module.exports = router;