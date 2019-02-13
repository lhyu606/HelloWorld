
// 1.bind
// 简易重写
Function.prototype.bind2 = function (context) {
	var self = this;	// 保留原函数
	var context = [].shift.call(arguments);	// 保存需要绑定的 this 上下文
	var args = [].slice.call(arguments);	// 剩余的参数转化为数组
	return function () {	// 返回一个心函数
		return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
	}
}
// MDN 上 Polyfill 支持方法
Function.prototype.bind3 = function(oThis) {
	if (typeof this !== 'function') {
		// closest thing possible to the ECMAScript 5
		// internal IsCallable function
		throw new TypeError('Function.protype.bind - what is trying to be bound is not IsCallable');
	}

	var aArgs = Array.prototype.slice.call(arguments, 1),
		fToBind = this,
		fNOP = function () {},
		fBound = function () {
			// this instanceof fBound === true 时，说明返回的 fBound 被当做 new 的构造函数调用
			return fToBind.apply(this instanceof fBound ? this : oThis, 
				// 获取调用时 (fBound) 的传参.bind 返回的函数入参往往是这么传递的 
				aArgs.concat(Array.prototype.slice.call(arguments))
				);
		};
	// 维护原型关系
	if (this.prototype) {
		// Function.prototype doesn't have a prototype property
		fNOP.prototype = this.prototype;
	}
	// 下行的代码使 fBound.prototype 是 fNOP 的实例，因此返回的 fBound 若作为 new 的构造函数，new 生成的新对象作为 this 传入 fBound, 新对象的 __proto__ 就是 fNOP 的实例
	fBound.prototype = new fNOP();

	return fBound;
};

// 1. test:
var animal = {
	age: 0,
	getAge: function () {
		return this.age;
	}
}

var car = {
	age: 3,
	name: 'car'
}

console.log('-------- bind ------------');
var carGetAge = animal.getAge;
console.log(carGetAge());

var carGetAge2 = animal.getAge.bind(car);
console.log(carGetAge2());

var carGetAge3 = animal.getAge.bind2(car);
console.log(carGetAge3());

var carGetAge4 = animal.getAge.bind3(car);
console.log(carGetAge4());
