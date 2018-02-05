//引入express 模块
const express = require('express');

const  app =express();
//引入session
const session = require('express-session')
//引入路由模块
const  router = require('./router');

//引入请求接收参数模块
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

//引入模板引擎
// 第一个参数用来配置视图的后缀名，这里是 art ，则你存储在 views 目录中的模板文件必须是 xxx.art
// 这里我把 art 改为 html
app.engine('html', require('express-art-template'))

//开放目录
app.use('/public',express.static('./public/'))
app.use('/node_modules',express.static('./node_modules/'))

//引入session
app.use(session({
    // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
    // 目的是为了增加安全性，防止客户端恶意伪造
    secret: 'itcast',
    resave: false,
    saveUninitialized: true // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
}))

// 引入路由挂载
app.use(router);

// 监听3000端口
app.listen(3000,() => console.log('监听3000端口') );