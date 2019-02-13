var str = "{}{}{}{}{}{}{}";
var strs = [
    "{}{}{}{}{}{}{}",
    "{}}{{}",
    "{{}}{}{}",
    "{}{[({{}})]}",
    "{[}(])",
    "{[]}()"
]
var arr = strs[1].split('');
console.log(arr);
var sum = 0;
arr.map(function (v, k, w) {
    if (v == '{') {
        sum++;
    } else if (v == "}") {
        sum--;
    }
    if (sum < 0) {
        console.log('error insi');
    }
    //console.log(k, v, w);
});
console.log(sum);
if (sum == 0) {
    console.log('right');
} else {
    console.log('error');
}
/* ========================================== */
var strs = [
    "{}{}{}{}{}{}{}",
    "{}}{{}",
    "{{}}{}{}",
    "{}{[({{}})]}",
    "{[}(])",
    "{[]}()"
]


console.log("result: ");
console.log(check(strs[1]));

function check(value) {
    var result = 'success';
    var reg1 = /\}|\]|\)/;
    var reg2 = /\{\}|\[\]|\(\)/g;
    do {
        if (value.length % 2 != 0) {
            console.log('length != 0');
            result = 'wrong';
            break;
        }
        if (reg1.test(value[0])) {
            console.log('the first is wrong !');
            result = 'wrong';
            break;
        }
        console.log(value);
        //console.log(reg2.test(value));
        if (!reg2.test(value)) {
            result = 'the order is wrong';
            break;
        }
        value = value.replace(reg2, '');
        console.log('value:' + value);
    } while (value.length > 0);
    return result;
    //console.log(value + " is success ...");
}
