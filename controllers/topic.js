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
exports.createshu=function (req,res,next) {
    //接收页面提交的数据
   const body = req.body;
   body.userId=req.session.use.id;
    topicModel.createti(body,function (err,data) {
        if (err) {
            return next(err)
        }
        res.status(200).json({
            code: 0
        })

    });
}

//文章展示
exports.show=function (req,res,next) {
    //获取提交 值
    const body = req.params;
    const topicId = body.topicId;
    //获取数据
    topicModel.showdate(topicId,function (err,topic) {
        if(err){
            return next(err);
        }

        //展示视图
    res.render('./topic/show.html',{topic});
    })
    
}

exports.delete= function (req,res,next) {
    //获取要删除的id
    const id = req.params.topicId;
   
    //进行删除
    topicModel.delete(id,function (err,data) {
        if(err){
             console.log('ss');
            return next(err);
           
        }

        return res.status(200).json({
            code: 0,
            message: 'success'
        })
    })
}

//文章编辑
exports.editshow = function (req,res,next) {
    //获取用户id
    const id = req.params.topicId;

    //获取数据
    topicModel.ban(function (err, topicCategories) {
        if (err) {
           return next(err);
        }

//获取用户所有数据
    topicModel.showdate(id, function (err, topic) {
        if (err) {
            return next(err);
        }

        //展示视图
        res.render('./topic/edit.html', { topic, topicCategories });
    })


    }); 


    
}


exports.edit = (req, res, next) => {
    const { topicId } = req.params
    console.log(req.body);
    topicModel.findByIdAndUpdate(topicId, req.body, (err, results) => {
        if (err) {
            return next(err)
        }
        res.status(200).json({
            code: 0,
            data: {
                redirect: `/topic/${topicId}`
            },
            message: 'success'
        })
    })
}