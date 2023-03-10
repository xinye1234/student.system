var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//二级目录所在的位置
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const moviesRouter = require('./routes/moves');
const studentsRouter = require('./routes/students');
const classRouter = require('./routes/class')
const teachersRouter = require('./routes/teachers');

//引入数据库
require('./dao/database');

const jwtAuth = require('./utils/jwt')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(jwtAuth);

//用于配置 Ajax 请求的一级路径
app.use('/', indexRouter);
app.use('/student', studentsRouter);
app.use('/users', usersRouter);
app.use('/moves',moviesRouter);
app.use('/class',classRouter);
app.use('/teachers',teachersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
app.listen(3000,'localhost',()=>{
  console.log('3000端口启动成功');
})
