//引入数据库操作类
const {query} = require('../utilities/db-helper');
exports.email=function (email,callback) {
    let sql = "SELECT * FROM `users` where `email` =?" ;
    //判断邮箱
    query(sql,[email],function (err,results) {
        if (err){
            return callback(err)
        }
        callback(null, results[0]);
    });

};

exports.nickname=function (nickname,callback) {
    let sql = "SELECT * FROM `users` where `nickname` =?";
    //判断name
    query(sql,[nickname],function (err,result) {
        if(err){
            return callback(err);
        }
        callback(null,result[0])

    });
}

exports.save=function (user,callback) {
    user.createdAt = null;
    const sql= "INSERT INTO `users` SET ?"
    query(sql,user,function (err,results) {
        if (err){
            return callback(err);
        }
        callback(null,results);
    })
}