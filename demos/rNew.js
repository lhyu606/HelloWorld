// new
function create () {
	let obj = new Object();
	let con = [].shift.call(arguments);
	obj.__proto__ = con.prototype;
	let result = con.apply(obj, arguments);
	return typeof result === 'object' ? result : obj;
}

function Animal (name, age) {
	this.name = name;
	this.age  = age;
	this.getName = function (){
		return this.name;
	}
}

var cat = new Animal('cat', 1);
console.log(cat, cat.getName());

var dog = create( Animal, 'dog', 2);
console.log(dog, dog.getName());

// extr
// var arr = [1, 2];
// var item1 = [].shift.call(arr);
// console.log(item1, arr) 		// 1, [2]
