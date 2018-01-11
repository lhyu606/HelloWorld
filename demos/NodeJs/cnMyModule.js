function MyModule(){
	var name ;
	this.setName = function(name){
		this.name = name;
	}
	
	this.sayHello = function(){
		console.log('Hello ' + this.name);
	}
}

module.exports = MyModule;
