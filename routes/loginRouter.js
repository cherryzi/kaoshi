let express = require('express');
let loginDB = require('../db/loginDB');
let User = require('../model/User');

let router = express.Router();

router.get('/findByName',(req,resp)=>{
	// console.log(req.query.name);
	
	loginDB.findByName(req.query.name).then((results)=>{
		resp.json(results);
	}).catch((error)=>{
		resp.json(error);
	});
});

router.post('/save',(req,resp)=>{
	var user = new User();
	Object.assign(user,req.body)
	loginDB.save(user).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

module.exports = router;
