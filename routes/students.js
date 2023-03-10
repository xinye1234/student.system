var express = require('express');
var router = express.Router();
const {uploadFiles, moveFiles, deleteFiles} = require('../utils/handleFiles');
/* GET home page. */
//获取第二层暴露的方法
const {getStudents,deletStudents,addStudent,updateStudent,getStudentById} = require('../service/studentsService');
//渲染学生列表
router.get('/getStudents',async function(req, res, next) {
  // console.log(req.query);
  const data = await getStudents( req.query);
  res.send(data);
});
//删除学生功能
router.post('/deletStudents',async function(req, res, next) {
  const data = await deletStudents(req.body);
  res.send(data);

});

//新增学生
router.post('/addStudent',async function(req, res, next) {
  const data = await addStudent(req.body);
  if(data.status&&req.body.imagesName){
      moveFiles({
      fromPath:'./public/temp',
      toPath:'./public/images',
      filename:req.body.imagesName,
      })
      deleteFiles('./public/temp');
  }
  
  res.send(data);
});

//修改学生信息
router.post('/updateStudent',async function(req, res, next) {
  // console.log(req.body);
  const data = await updateStudent(req.body);
  res.send(data);
});
//获取修改数据
router.get('/getStudentById',async function(req, res, next) {
  
  const data = await getStudentById(req.query);
  res.send(data);
  // console.log(data);
});

// 上传头像


router.post('/upload', function(req, res, next) {
  // console.log(req.body);
  const upload = uploadFiles({
    path:'./public/temp',//设置上传成功后的图片存储路径
    key:'file', //与前端append方法名称匹配   formData.append('file',files[0]);
    size:1000,//图片大小上限 1000kb
  });
  upload(req,res,(err) => {
    if(err){
      console.log('图片上传失败');
    }else{
      console.log('图片上传成功',req.files);
      res.send({
        message:'图片上传成功',
        status:1,
        data: req.files[0].filename,
      })
    }
  });
  
});
module.exports = router;
