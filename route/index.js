//加载express框架
const express = require('express');
//引入控制器
const indexController = require('../controllers/index');

const router = express.Router();

//创建路由

//首页路由
router.get('/',indexController.index);

//导出路由
module.exports=router;