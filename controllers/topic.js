//引入数据库类
const topicModel = require('../models/topic');
exports.xie=function (req,res,next) {
    //获取数据
    topicModel.ban();
    res.render('./topic/new.html')
};