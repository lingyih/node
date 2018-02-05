//引入数据库操作模块
const userModel = require('../models/user');
//引入MD5加密类
const md5 =require('blueimp-md5')
//登录页
exports.login=function (req,res) {
    res.render('./login.html');
}

// 注册页
exports.sign= function (req,res) {
    res.render('./register.html')
}
//注册项
exports.signadd=function (req,res) {
    // 接收数据
    const body=req.body;
    const email = body.email;
    // 调用方法判断邮箱是否被注册
    userModel.email(email,(err,data) => {

            if (err) {
                return res.status(500).json({
                    error: err.message // err 错误对象有一个 message 属性是具体的错误消息
                })
            }


            //判断数据是否被注册
        if(data!=undefined)
    {
        return res.status(200).json({
            code: 1,
            message: 'user not exists'
        })
    }


        //接收用户名
        const user=body.nickname;


        // 调用方法判断数据是否被注册
        userModel.nickname(user,(err,data)=>{
            if(err){
                return res.status(500).json({
                    error: err.message
                })
            }


           // 判断是否被注册
            if(data!=undefined)
    {
        return res.status(200).json({
            code: 2,
            message: 'user not exists'
        })
    }


    //添加数据
        body.password=md5(body.password);
            userModel.save(body,(err,data)=>{
        if(err){
            return res.status(500).json({
                error: err.message
            })
        }
        //添加session
                req.session.use=data

        return res.status(200).json({
            code: 0,
        })


    })
        });



    });
};


//登录页
 exports.loginadd=function (req,res) {
     //获取提交至
     const body = req.body;
     //判断提交邮箱
     userModel.email(body.email,(err,data) => {
         //接收用户提交过来的密码
      let pass= body.password
         //接收数据库返回的密码
      let word = data.password
         let date=data

         if(err){
             return res.status(500).json({
                 error: err.message
             })
         }
         //判断有没有这个数据
         if(data==undefined){
            return  res.status(200).json({
                 code:1,
             })
         }
         //判断密码是否正确
         if(md5(pass)!=word){
            return  res.status(200).json({
                 code:2
             })
         }
         //存session
     req.session.use=date

     
     //进行跳转
        return res.status(200).json({
         code: 0,
     })
     })
 }
