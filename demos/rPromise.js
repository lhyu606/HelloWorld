
// 2. Promise

function _Promise (resolver) {
	this._status = 'pending';
	this._result = '';
	resolver(this.resolve.bind(this), this.reject.bind(this));
}

_Promise.prototype.resolve = function (result) {
	if (this._status === 'pending') {
		this._status = 'fullfilled';
		this._result = result;console.log(this)
	}
}
_Promise.prototype.reject = function (result) {
	if (this._status === 'pending') {
		this._status = 'rejected';
		thsi._result = result;
	}
}
_Promise.prototype.then = function (isResolve, isReject) {
	var timer = null;
	var that = this;
	if (this._status === 'pending') {
		// 继续轮询
		timer = setTimeout(function(){
			clearTimeout(timer);
			timer = null;
			that.then(isResolve, isReject);
		},17);
		
		return;
	}
	
	if (this._status === 'fullfilled') {
			console.log('resolve--', this)
		var _isPromise = isResolve(this._result);
		if (_isPromise instanceof _Promise) {
			return _isPromise;
		}
		return this;
	} else if (this._status === 'rejected' && arguments[1]) {
		var err = new TypeError(this._result);
		var _isPromise = isReject(err);
		if (_isPromise instanceof _Promise) {
			return _isPromise;
		}
		return this;
	} else {
		return;
	}
}

console.log('-------- promise ------------');

function wait () {
	return new _Promise((resolve, reject) => {
		console.log('begin....');
		setTimeout(function () {
			console.log('timeout');
			resolve('time');
		}, 2000);
		console.log('over....');
	});
}

wait().then(res => {
	console.log('result: ');
	console.log(res);
}, res => {
	console.log('error: ')
	console.log(res)
})

// console.log(wait().then())
