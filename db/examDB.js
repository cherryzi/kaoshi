let pool = require('./pool');

module.exports={
	findAll(){
		var sql = "select * from exam";
		return pool.execute(sql);
	},
	save(ti){
		var sql = "insert into exam values(null,'"+ti.type+"','"+ti.question+"','"+ti.options+"','"+ti.answer+"',"+ti.score+",'"+ti.complex+"','"+ti.direction+"','"+ti.author+"','"+ti.time+"','"+ti.know+"')";
		return pool.execute(sql);
	},
	batchDelete(ids){
		var sql = "delete from exam where id in ("+ids.join(',')+")";
		return pool.execute(sql);
	},
	findById(id){
		var sql = "select * from exam where id="+id;// id in (1)
		return pool.execute(sql);
	},
	update(ti){
		var sql = "update exam set type='"+ti.type+"',question='"+ti.question+"',options='"+ti.options+"',answer='"+ti.answer+"',score='"+ti.score+"',complex='"+ti.complex+"',direction='"+ti.direction+"',author='"+ti.author+"',time='"+ti.time+"',know='"+ti.know+"' where id='"+ti.id+"'";
		return pool.execute(sql);
	},
	// tiku
	find(obj){
		var sql = 'select * from exam where type in ('+ obj.type.split(',').join('","') +') and direction in ('+ obj.direction.split(',').join('","') +') and complex in ('+ obj.complex.split(',').join('","') +') and know in ('+ obj.know.split(',').join('","') +')';
		// console.log(sql);
		return pool.execute(sql);
	},
	query(keys){
		var sql="select * from exam where type like '%"+keys+"%' or question like '%"+keys+"%' or options like '%"+keys+"%' or complex like '%"+keys+"%' or score like '%"+keys+"%' or direction like '%"+keys+"%' or author like '%"+keys+"%' or know like '%"+keys+"%'";
		return pool.execute(sql);
	}


}	