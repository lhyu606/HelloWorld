// 常见数据类型
var und
var nul = null
var str = 'string'
var obj = {name: 'obj'}
var num = 11
var nan = 1/0
var bool = true
var arr = [1,2]
var regExp = /[0-9]{1,9}/
function fn(name){
	this.name = name
}
var newFac = new fn('factory');
console.log(isObject(str));
console.log(isObject(obj));
console.log(isObject(num));
console.log(isObject(bool));
console.log(isObject(newFac));
console.log(isObject(und));
console.log(isObject(nul));
console.log(isObject(arr));
console.log(isObject(fn));


// 常用函数集合

function isUndef (v) {
	return v === undefined || v === null
}

function isDef (v) {
	return v !== undefined && v !== null
}

function isTrue (v) {
	return v === true
}

function isFalse (v) {
	return v === false
}

// 判断是否基本类型
function isPrimitive (value) {
	return (
		typeof value === 'string' ||
		typeof value === 'number' ||
		typeof value === 'symbol' ||
		typeof value === 'boolean'
	)
}

function isObject (obj) {
	return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString ;

function roRawType (value) {
	return _toString.call(value).slice(8,-1)
}

function isPlainObject (obj) {
	return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
	return _toString.call(v) === '[object RegExp]'
}

function isValidArrayIndex (val) {
	var n = parseFloat(String(val))
	return n >= 0 && Math.floor(n)  === n && isFinite(val)
}

function toString (val) {
	return val == null 
	? ''
	: typeof val === 'object'
		? JSON.stringify(val, null, 2)
		: String(val)
}

function toNumber (val) {
	var n = parseFloat(val)
	return isNaN(n) ? n : val
}
//  至 104 行，跳过 map 

function remove (arr,item) {
	if (arr.length) {
		var index = arr.indexOf(item)
		if (index > -1) {
			return arr.splice(index, 1)
		}
	}
}

var hasOwnProperty = Object.prototype.hasOwnProperty
function hasOwn (obj, key) {
	return hasOwnProperty.call(obj, key)
}

function  cached (fn) {
	var cache = Object.create(null)
	return (function cachedFn (str) {
		var hit = cache[str]
		return hit || (cache[str] = fn(str))
	})
}

var camelizeRE = /-(\w)/g
var camelize = cached(function (str) {
	return str.replace(camelizeRE, function (_, c) {
		return c ? c.toUpperCase() : ''
	})
})

var capitalize = cached(function (str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
})

function polyfillBind (fn, ctx) {
	function boundFn (a) {
		var l = arguments.length
		return l
			? l > 1
				? fn.apply(ctx, arguments)
				: fn.call(ctx, a)
			: fn.call(ctx)
	}

	boundFn._length = fn.length
	return boundFn
}

function nativeBind (fn, ctx) {
	return fn.bind(ctx)
}

var bind = Function.prototype.bind
	? nativeBind
	: polyfillBind

function toArray (list, start) {
	start = start || 0
	var i = list.length - start
	var ret = new Array(i)
	while (i--){
		ret[i] = list[i + start]
	}
	return ret
}

function extend (to, _from) {
	for (var key in _from) {
		to[key] = _from[key]
	}
	return to
}

function toObject (arr) {
	var res = {}
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]) {
			extend(res, arr[i])
		}
	}
	return res
}

function looseEqual (a, b) {
	if (a === b) {return true}
	var isObjectA = isObject(a)
	var isObjectB = isObject(b)
	if (isObjectA && isObjectB) {
		try {
			var isArrayA = Array.isArray(a)
			var isArrayB = Array.isArray(b)
			if (isArrayA && isArrayB) {
				return a.length === b.length && a.every(function (e,i){
					return looseEqual(e, b[i])
				})
			} else if (!isArrayA && isArrayB) {
				var keysA = Object.keys(a)
				var keysB = Object.keys(b)
				return keysA.length === keysB.length && keysA.every(function (key) {
					return looseEqual(a[key], b[key])
				})
			} else {
				return false
			}
		} catch (e) {
			return false
		}
	} else if (!isObjectA && isObjectB) {
		return String(a) === String(b)
	} else {
		return false
	}
}

function looseIndexOf (arr, val) {
	for (var i = 0; i < arr.length; i++) {
		if (looseEqual(arr[i], val)) {
			return i
		}
	}
	return -1
}

function once (fn) {
	var called = false
	return function () {
		if (!called) {
			called = true
			fn.apply(this, arguments)
		}
	}
}

// can we use __proto__ ?
var hasProto = '__proto__' in {}

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined'
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase()
var UA = inBrowser && window.navigator.userAgent.toLowerCase()
var isIE = UA && /msie|trident/.test(UA)
var isIE9 = UA && UA.indexOf('msie 9.0') > 0
var isEdge = UA && UA.indexOf('edge/') > 0
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios')
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge

var _Set

// if (typeof Set !== 'undefined' && isNative(Set)) {
if (typeof Set !== 'undefined' && true) {
	_Set = Set
} else {
	_Set = (function () {
		function Set () {
			this.set = Object.create(null)
		}
		Set.prototype.has = function has (key) {
			return this.set[key] === true
		}
		Set.prototype.add = function add (key) {
			this.set[key] = true
		}
		Set.prototype.clear = function clear () {
			this.set = Object.create(null)
		}
		return Set
	}())
}

var repeat = function (str, n) {
	var res = ''
	while (n) {
		if(n % 2 === 1) { res += str }
		if(n > 1) { str += str }
		n >>= 1
	}
	return res
}

var ar2 = arr.slice(); // copy an array












