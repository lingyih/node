//引入数据库操作类
const mysql = require('mysql');
const {query} = require('../utilities/db-helper');
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