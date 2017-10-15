var mysql = require('mysql');
let pool = global.pool;
if(!pool){
	pool = mysql.createPool({
		database:"exam",
		user:"root",
		password:"root"
	});
	global.pool = pool;
}

module.exports={
	getConnection(){
		return new Promise(function(resolve,reject){
			pool.getConnection(function(err,connection){
				if(!err){
					resolve(connection);
				}else{
					reject(err);
				}
			});
		});
	},

	execute(sql){
		let _this=this;
		return new Promise(function(resolve,reject){
			let conn;
			_this.getConnection().then(function(connection){
				conn=connection;
				connection.query(sql,function(err,results){
					if(!err){
						// console.log(results);
						resolve(results);
					}else{
						reject(error);
					}
				});
			}).catch(function(err){
				reject(error);
			}).finally(function(){
				if(conn){
					conn.release();
				}
			});
		});
	}
}