const createCurry = ( fn, ...args ) => {
    let _args = args || [];
    let length = fn.length;
    console.log(fn.length)

    return ( ...rest ) => {
        let _allArgs = _args.slice(0);
        // 深拷贝闭包公用对象 _args, 避免后续操作影响（引用类型）
        _allArgs.push(...rest);
        if ( _allArgs.length < length ) {
            // 参数数量不满足原始函数数量，返回 curry 函数
            return createCurry.call( this, fn, ..._allArgs );
        } else {
            return fn.apply(this, _allArgs);
        }
    }
}

function add (a, b, c, d) {
    return a + b + c + d;
}

const curryAdd = createCurry(add, 2);
let sum = curryAdd(3)(4)(5);
console.log(sum)
