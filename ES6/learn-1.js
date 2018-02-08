/*
*    http://es6.ruanyifeng.com/
*    
*   学习阮一峰老师的 ECMAScript 6 入门
*/

// let -----------------------------------------------
{
    {
        let a = 1;
        var b = 2;
    }
    // console.log(a); // ReferenceError: a is not defined
    console.log(b); // 2
    // 块级作用域，块内有效
    var arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = function () {
            console.log(i);
        };
    }
    arr[5]();// 5  

    for (let i = 0; i < 3; i++) {
        let i = 'i';
        console.log(i);
    }
    // for 循环特殊，在（）内是该循环的父作用域，{} 内是子作用域

    console.log(as); // undefined
    var as = 'as';
    // console.log(asd); // ReferendceError
    // typeof asd ;  // ReferendceError
    let asd = 'asd';
    // let 必须先声明后使用，否则出错，typeof asd 会出错
    // 相同作用域不允许重复声明
}
{
    // const 声明常量，并且必须立即初始化，不能修改，如果是对象，数组可以向其添加元素
    // 必须声明后才能使用，块级作用域限制，不允许重复声明
    const foo = {};
    foo.prop = 'foo';
    const a = [];
    a.push(0);
}

// 解构赋值  -----------------------------------------------
{
    let [a, b, c] = [1, 2, 3];
    let [foo, [[bar], baz]] = [1, [[2], 3]];
    let [, , third] = [1, 2, 3];
    let [x, , y] = [1, , 2];

    let [head, ...tail] = [1, 2, 3, 4, 5];
    console.log(head);// 1
    console.log(tail);//[2,3,4,5]
    let [xx, yy, ...zz] = ['a'];
    console.log(xx);// 'a'
    console.log(yy);// undefined
    console.log(zz);// []
    // 如果解构失败，变量的值就是 undefined
    let [fo] = [];
    console.log(fo);// undefined
    let [aa, bb] = ['a'];
    console.log(aa);// 'a'
    // console.log(bb); // undefined
    // 报错
    // let [foo1] = 1;
    // let [foo2] = false;
    // let [foo3] = NaN;
    // let [foo4] = undefined;
    // let [foo5] = null;
    // let [foo6] = {};
    // 上面的语句都会报错，因为等号右边的值，要么转为对象以后不具备 Iterator 接口（前五个表达式），要么本身就不具备 Iterator 接口（最后一个表达式）。

}
{
    // Set 结构
    let [x, y, z] = new Set(['a', 'b', 'c']);
}
{
    // 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。

    function* fibs() {
        let a = 0;
        let b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    }

    let [first, second, third, fourth, fifth, sixth] = fibs();
    console.log(sixth); // 5
}
{
    // 允许使用默认值， 条件是，对象的属性值严格等于undefined
    let [foo = true] = [];
    let [x = 1] = [undefined];
    console.log(x); // 1

    let [y = 1] = [null];
    console.log(y); // null
}
{
    // 对象的解构赋值,<<--变量必须与属性同名，才能取到正确的值-->>
    let { bar, foo } = { foo: "aaa", bar: "bbb" };
    console.log(bar);// "aaa"
    console.log(foo);// "bbb"

    // 如果 p 也要赋值
    let obj = {
        p: [
            'Hello',
            { y: 'World' }
        ]
    };

    let { p, p: [x, { y }] } = obj;
    //   x // "Hello"
    //   y // "World"
    //   p // ["Hello", {y: "World"}]

    // 数组作为特殊对象赋值
    let arr = [1, 2, 3];
    let { 0: first, [arr.length - 1]: last } = arr;
    // first // 1
    // last // 3
}
{
    // 已经声明的变量用于解构赋值
    // 错误的写法
    let x;
    // {x} = {x: 1};// SyntaxError: syntax error
    ({ x } = { x: 1 }); // 正确写法
}
{
    //    字符串解构赋值
    const [a, b, c, d, e] = 'hello';
    let { length: len } = 'hello';
    // len // 5
}


{
    // 字符
    let s = '𠮷a';
    s.codePointAt(0).toString(16) // "20bb7"
    s.codePointAt(2).toString(16) // "61"

    let coo = String.fromCharCode(0x20BB7);
    console.log(coo);
    let coo2 = String.fromCodePoint(0x20BB7);
    console.log(coo2);

    // 测试一个字符由两个字节还是由四个字节组成的最简单方法。
    function is32Bit(c) {
        return c.codePointAt(0) > 0xFFFF;
    }

    console.log(is32Bit("𠮷")); // true
    console.log(is32Bit("a")); // false

    // for ...of 遍历器可以识别大于 0xFFFF 的码点,正确识别为一个字符，传统 for 循环不行
    let text = String.fromCodePoint(0x20BB7);
    for (let i of text) {
        console.log(i);
    }
    console.log(text);
    text.charAt(0); // 不能正确识别
    //text.at(0); // 正确识别
}
{
    // 字符串新方法
    let s = 'Hello world!';
    s.startsWith('Hel'); // true
    s.endsWith('!');// true
    s.includes('o'); // true
    // 开始搜索位置
    s.startsWith('world', 6) // true
    s.endsWith('Hello', 5) // true
    s.includes('Hello', 6) // false
    // repeat 参数会先取整
    'x'.repeat(3);// "xxx"
    // padStart  padEnd  第一个参数小于字符串长度，返回元字符串
    'x'.padStart(4, 'ab') // 'abax'
    'x'.padEnd(4, 'ab') // 'xaba'
    '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
    '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
}
{
    // 模板字符串， 反引号  ` ${var} ` 可换行 ${}可以运算，调用函数，嵌套
}

{
    // 正则表达式
    //  u 修饰符 码点识别 Unicode
    /^\uD83D/u.test('\uD83D\uDC2A'); // false
    /^\uD83D/.test('\uD83D\uDC2A'); // true
    // y 修饰符每次开头匹配
    const REGEX = /a/gy;
    'aaxa'.replace(REGEX, '-') // '--xa'
    var r = /hello\d/gy;
    r.sticky; // true   // sticky 是否设置了 y 修饰符
    r.flags;  // 'gy'  返回所有修饰符

    // const re = /foo.bar/s; // s 修饰符，. 匹配所有
    // re.test('foo\nbar'); // true
    // re.dotAll; // true 表示该正则表达式是否处在dotAll模式。

    // 后行断言
    // x只有在y后面才匹配，必须写成     /(?<=y)x/
    // x只有不在y后面才匹配，必须写成    /(?<!y)x/

    // 先行断言
    // x只有在y前面才匹配，必须写成     /x(?=y)/
    // x只有不在y前面才匹配，必须写成    /x(?!y)/

    // 具名组匹配   ?<year>
    // const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

    // const matchObj = RE_DATE.exec('1999-12-31');
    // const year = matchObj.groups.year; // 1999
    // const month = matchObj.groups.month; // 12
    // const day = matchObj.groups.day; // 31
}

{
    // 二进制和八进制表示法,分别用前缀 0b（或 0B）和 0o（或 0O）表示
    // parseInt()和 parseFloat()，移植到Number对象上面
    // Number.isInteger()用来判断一个数值是否为整数
    Number.isInteger(25.0); // true
    Number.isInteger(3.0000000000000002); // true
    // Number.MIN_VALUE =（5E-324）
    Number.isInteger(5E-324); // false 
    Number.isInteger(5E-325); // true

    // 在Number对象上面，新增一个极小的常量Number.EPSILON。
    // 根据规格，它表示 1 与大于 1 的最小浮点数之间的差。
    // 实质是一个可以接受的最小误差范围
    function withinErrorMargin(left, right) {
        return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
    }

    0.1 + 0.2 === 0.3; // false
    withinErrorMargin(0.1 + 0.2, 0.3); // true

    //   Number.MAX_SAFE_INTEGER和 Number.MIN_SAFE_INTEGER这两个常量，用来表示安全整数范围的上下限
    // Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内

    // Math.trunc 方法用于去除一个数的小数部分，返回整数部分；如果环境没有：
    Math.trunc = Math.trunc || function (x) {
        return x < 0 ? Math.ceil(x) : Math.floor(x);
    };

    //   Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值
    // Math.cbrt方法用于计算一个数的立方根。如果环境没有：
    Math.cbrt = Math.cbrt || function (x) {
        var y = Math.pow(Math.abs(x), 1 / 3);
        return x < 0 ? -y : y;
    };

    //   Math.clz32方法返回一个数的 32 位无符号整数形式有多少个前导 0
    Math.clz32(0) // 32
    Math.clz32(1) // 31
    Math.clz32(1000) // 22
    Math.clz32(0b01000000000000000000000000000000) // 1
    Math.clz32(0b00100000000000000000000000000000) // 2

    // Math.imul方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数
    Math.imul(2, 4)   // 8
    Math.imul(-1, 8)  // -8
    Math.imul(-2, -2) // 4

    // Math.hypot方法返回所有参数的平方和的平方根
    Math.hypot(3, 4, 5);     // 7.0710678118654755
    // Math.expm1(x)返回 ex - 1，即Math.exp(x) - 1
    // Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)
    // Math.log10(x)返回以 10 为底的x的对数。如果x小于 0，则返回 NaN，如果没有：
    Math.log10 = Math.log10 || function (x) {
        return Math.log(x) / Math.LN10;
    };
    //   Math.log2(x)返回以 2 为底的x的对数。如果x小于 0，则返回 NaN，如果没有：
    Math.log2 = Math.log2 || function (x) {
        return Math.log(x) / Math.LN2;
    };
    // Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
    // Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
    // Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
    // Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
    // Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
    // Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）
    // 指数运算符（**）
    b **= 3;
    // 等同于 b = b * b * b;
}
{
    // 函数参数   ...rest
    function add(...values) {
        let sum = 0;

        for (var val of values) {
            sum += val;
        }

        return sum;
    }

    add(2, 5, 3) // 10

    //   name 属性
    function foo() { }
    // foo.name // "foo"
    // Function构造函数返回的函数实例，name属性的值为anonymous。

    (new Function).name // "anonymous"
    // bind返回的函数，name属性值会加上bound前缀。

    function foo() { };
    foo.bind({}).name // "bound foo"
}
{
    // 箭头函数
    var f = v => v; // 一个参数
    var f = () => 5; // 无参数
    var sum = (num1, num2) => num1 + num2; // 多参数
    let getTempItem = id => ({ id: id, name: "Temp" }); // 直接返回一个对象
    var sum = (num1, num2) => { return num1 + num2; }; // 代码多于一条，大括号包裹
    // 注意点 ：
    // （1）函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。
    // （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
    // （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
    // （4）不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。
}

// 数组扩展
{
    // ...[2,3,4,5]  将一个数组转为用逗号分隔的参数序列
    console.log(1, ...[2, 3, 4], 5);
    // 1 2 3 4 5
    // 替代函数的 apply 方法 
    // ES5 的写法
    function f(x, y, z) {
        // ...
    }
    var args1 = [0, 1, 2];
    f.apply(null, args1);

    // ES6的写法
    function f(x, y, z) {
        // ...
    }
    let args2 = [0, 1, 2];
    f(...args2);
    // 克隆
    // es5
    const a1 = [1, 2];
    const a2 = a1.concat();

    a2[0] = 2;
    a1 // [1, 2]
    // es6
    //     // 写法一
    // const a2 = [...a1];
    // // 写法二
    // const [...a2] = a1;

    // ES5的合并数组
    // arr1.concat(arr2, arr3);
    // [ 'a', 'b', 'c', 'd', 'e' ]

    // ES6的合并数组
    // [...arr1, ...arr2, ...arr3]
    // 可以将字符串转为真正的数组。可以正确识别 Unicode 字符 [...'x\uD83D\uDE80y'].length // 3

    var strArr = [...'hello'];

    // nodeList对象 转为正真的数组
    // let nodeList = document.querySelectorAll('div');
    // let array = [...nodeList];

    // Array.from() 类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）转为真正的数组
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };

    // ES5的写法
    var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

    // ES6的写法
    let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

    // 如果没有 Array.from()
    // const toArray = (() =>
    //   Array.from ? Array.from : obj => [].slice.call(obj)
    // )();
    // Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

    // Array.from(arrayLike, x => x * x);
    // // 等同于
    // Array.from(arrayLike).map(x => x * x);

    // Array.of
    Array.of() // []
    Array.of(undefined) // [undefined]
    Array.of(1) // [1]
    Array.of(1, 2) // [1, 2]
    function ArrayOf() {
        return [].slice.call(arguments);
    }
    // find() undefined     findIndex()  -1
    // [1, 5, 10, 15].find(function (value, index, arr) {
    //     return value > 9;
    // }) // 10
    // [1, 5, 10, 15].findIndex(function (value, index, arr) {
    //     return value > 9;
    // }) // 2
    // function f(v) {
    //     return v > this.age;
    // }
    // let person = { name: 'John', age: 20 };
    // [10, 12, 26, 15].find(f, person);    // 26
    // [NaN].indexOf(NaN)
    // // -1

    // [NaN].findIndex(y => Object.is(NaN, y))

    // fill(); 參數 1,3個
    ['a', 'b', 'c'].fill(7, 1, 2);
    // ['a', 7, 'c']
    ['a', 'b', 'c'].fill(7);
    // [7, 7, 7]

    for (let index of ['a', 'b'].keys()) {
        console.log(index);
    }
    // 0
    // 1

    // for (let elem of ['a', 'b'].values()) {
    //     console.log(elem);
    // }
    // 'a'
    // 'b'

    for (let [index, elem] of ['a', 'b'].entries()) {
        console.log(index, elem);
    }
    // 0 "a"
    // 1 "b"
    // 如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。

    let letter = ['a', 'b', 'c'];
    let entries = letter.entries();
    console.log(entries.next().value); // [0, 'a']
    console.log(entries.next().value); // [1, 'b']
    console.log(entries.next().value); // [2, 'c']
}