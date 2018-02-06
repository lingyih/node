//引入数据库类
const topicModel = require('../models/topic');
exports.create=function (req,res,next) {
//判断是否登录
    if(!req.session.use){
     return   res.redirect('/login');
    }

    //获取数据
  topicModel.ban(function (err,data) {
      if(err){
          let shu="";
      }
      let shu = data;
      //展示视图,写数据
      res.render('./topic/new.html',{
          data:shu 
            });
  }); 
};

//表单提价方法
exports.createshu=function (req,res) {
    //接收数倍提交的数据
   const body = req.body;

}