var fn = function () { console.log(1) }
var obj = { name: 'obj', age: 12 }
var str = 'this is a string...'
var num = 123
var nall = null
var array = [1, 2, 3, 4]
var un;

function wtype(obj) {
    return Object.prototype.toString.call(obj).split(' ')[1].split(']')[0];
}

console.log(wtype(fn))
console.log(wtype(obj))
console.log(wtype(str))
console.log(wtype(num))
console.log(wtype(nall))
console.log(wtype(array))
console.log(wtype(un))




var data = {
    name: 'jim',
    age: 12
}

var div = 'my name is {name}, age is {age},{name}';

function rep(div) {
    return div.replace(/\{([^{]+)\}/g, function (match, key) {
        return (data[key] === undefined) ? '' : data[key];
    })
}

var ndiv = rep(div);
console.log(ndiv)
// function substitute(str,o,regexp){
// return str.replace(regexp || /\{([^{}]+)\}/g, function (match, name) {console.log(match,name)
//     return (o[name] === undefined) ? '' : o[name];
//     });
// }
// var str = substitute(div,data);

// console.log(str)

var rr = new RegExp('\{([^{]+)\}', 'g')
console.log(rr.exec('asd{asdf}asd'))
