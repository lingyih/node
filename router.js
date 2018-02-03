//加载express框架
const express = require('express');
//引入控制器
const indexController = require('./controllers/index');

const userController = require('./controllers/user');
const topicController = require('./controllers/topic');
const commonController = require('./controllers/common');

const router = express.Router();

//创建路由

//首页路由
router.get('/',indexController.index);

// // 登录页路由
router.get('/login',userController.login);
//
// //注册页展示路由
router.get('/sign',userController.sign);
//
// // 注册路由
// router.post('/sign',userController.signadd);
//
// // 登陆
// router.post('/login',userController.loginadd);


//导出路由
module.exports=router;