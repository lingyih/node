//引入express 模块
const express = require('express');

const  app =express();

//引入路由模块
const  router = require('./router');

//引入模板引擎
// 第一个参数用来配置视图的后缀名，这里是 art ，则你存储在 views 目录中的模板文件必须是 xxx.art
// 这里我把 art 改为 html
app.engine('html', require('express-art-template'))
//开放目录
app.use('/public',express.static('./public/'))
app.use('/node_modules',express.static('./node_modules/'))
// 引入路由挂载
app.use(router);

// 监听3000端口
app.listen(3000,() => console.log('监听3000端口') );