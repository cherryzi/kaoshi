class Ti{
	constructor(id,type,question,options=null,answer,score,complex,direction,author=null,time=null,know){
		this.id = id;
		this.type = type;
		this.question = question;
		this.options = options;
		this.answer = answer;
		this.score = score;
		this.complex = complex;
		this.direction = direction;
		this.author = author;
		this.time = time;
		this.know = know;
	}
}
module.exports = Ti;