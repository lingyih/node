//引入数据库操作类
const mysql = require('mysql');
//引入书库插件
const {query} = require('../utilities/db-helper');
//引入日期插件
const moment =require('moment');
exports.ban= function(callback) {
    //获取数据
    const sql ="SELECT * FROM `topic_categories`"
   query(sql,function (err,data) {
       if(err){
           return callback(err);
       }
       callback(null,data);
   })
};

//帖子数据库存入
exports.createti=function (data,callback) {
    //处理写入日期
    data.createdAt= moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(data);
    const sql = "INSERT INTO `topics` set ?"
    query(sql,data,function (err,re) {
        if(err){
            return callback(err);
        }
        callback(null,re);
    });
}