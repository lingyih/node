const topicModel = require('../models/topic')

//判断用户是否拥有删除,修改权利
exports.checkEditAndRemove = function (req, res, next) {
    //获取用户用户id

    //获取文章的编号
    const body = req.params;
    const topic = body.topicId;

    //查询对饮文章的用户id 
    topicModel.showdate(topic, function (err, data) {
         //获取用户用户id
       const id = req.session.use.id;
        if (err) {
            return next(err);
        }
    
        if (!data) {
            return res.status(200).json({
                code: 1
            })
        }

//判断是都是这个人
        if (id != data.userId) {
            return res.status(200).json({
                code: 2
            })
        }
        next();
    })
}