require("babel-polyfill");
let examDB = require('./examDB');
let Ti = require('../model/Ti');
let loginDB = require('./loginDB');

// examDB.findAll().then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log("报错了",error);
// });

// let ti = new Ti(19,'多选题','你是？','A 1 B 2 C 3 D 4','ABCD','2','容易','Java',null,null,'j2ee');
// examDB.update(ti).then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log("报错了",error);
// });

// examDB.findById(1).then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log("报错了",error);
// });

// loginDB.findByName('琦琦').then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log("报错了",error);
// });
