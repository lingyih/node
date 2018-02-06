//加载express框架
const express = require('express');
//引入控制器
const topicController = require('../controllers/topic');

const router = express.Router();

//创建路由

//首页路由
router.get('/create',topicController.create);

router.post('/create',topicController.createshu);






//导出路由
module.exports=router;