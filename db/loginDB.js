let pool = require('./pool');


module.exports={
	findByName(name){
		var sql = "select psw from login where name='"+name+"'";
		return pool.execute(sql);
	},
	save(user){
		var sql = "insert into login values(null,'"+user.name+"','"+user.psw+"')";
		return pool.execute(sql);
	}
}