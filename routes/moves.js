var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/getMoves'/*二级目录*/, function(req, res, next) {
  res.send({
    message:"电影数据获取成功",
    status:1,
    data:[{name:'XXX'}]
  });
});

module.exports = router;