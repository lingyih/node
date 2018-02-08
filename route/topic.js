//加载express框架
const express = require('express');
//引入控制器
const topicController = require('../controllers/topic');

//引入用户判断中间建
const topicMiddlewares =require('../middlewares/topic');

const router = express.Router();

//创建路由

//首页路由
router.get('/create',topicController.create);

//文章提缴
router.post('/create',topicController.createshu);

//文章展示
router.get('/:topicId',topicController.show);

//删除文章
router.post('/:topicId/delete',topicMiddlewares.checkEditAndRemove,topicController.delete);

//文章编辑
router.get('/:topicId/edit',topicMiddlewares.checkEditAndRemove,topicController.editshow);


//文章编辑提交
router.post('/:topicId/edit',topicMiddlewares.checkEditAndRemove,topicController.edit)
//导出路由
module.exports=router;