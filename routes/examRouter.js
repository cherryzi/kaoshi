let express = require('express');
let examDB = require('../db/examDB');
let Ti = require('../model/Ti');

let router = express.Router();

// 查询所有
router.get('/findAll',(req,resp)=>{
	examDB.findAll().then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

// 通过id查询
router.get('/findById',(req,resp)=>{
	console.log(req.query.id);
	examDB.findById(req.query.id).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

// 添加
router.post('/save',(req,resp)=>{
	let ti = new Ti();
	Object.assign(ti,req.body);
	// console.log(ti);
	examDB.save(ti).then((results)=>{
		resp.json(results);
	}).catch((error)=>{
		resp.json(error);
	});
});

// 批量删除
router.post('/batchDelete',(req,resp)=>{
	var ids = req.body;
	if(ids.length>0){
		examDB.batchDelete(ids).then((results)=>{
			resp.json(results);
		}).catch((error)=>{
			resp.json(error);
		});
	}else{
		resp.json({'affectedRows':0});
	}
});

router.post('/update',(req,resp)=>{
	let ti = new Ti();
	Object.assign(ti,req.body);
	// console.log(ti);
	examDB.update(ti).then((results)=>{
		resp.json(results);
	}).catch((error)=>{
		resp.json(error);
	});
});

router.get('/find',(req,resp)=>{
	// console.log(req.query);
	examDB.find(req.query).then((results)=>{
		resp.json(results);
	}).catch((error)=>{
		resp.json(error);
	});
});

router.get('/query/:keys',(req,resp)=>{
	// console.log(req.params.keys);
	examDB.query(req.params.keys).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

module.exports = router;