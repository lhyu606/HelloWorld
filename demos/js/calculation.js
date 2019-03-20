
// 计算器逻辑

var pan = document.getElementById('pan');
var panel = document.getElementById('panel');

var param1 = [],
    param2 = [],
    result = 0;
var step = 1;
var cal = '';
var hasResult = false;
pan.onclick = function (e) {
    var target = e.target;
    var className = target.className;
    var value;
    var timer = null;
    if (/btn/g.test(className)) {
        value = parseInt(target.innerHTML);
        value = isNaN(value) ? target.innerHTML : value;
        console.log(value)
        target.setAttribute('class', className + ' click');
        timer = setTimeout(function () {
            target.setAttribute('class', className);
            clearTimeout(timer);
            timer = null;
        }, 200);
        // 数字键

        if ((value >= 0 && value <= 9) || (/\./.test(value))) {
            console.log(/\./.test(value))
            // 验证是否开头连续为 0 
            if (param1.length == 1 && param1[0] == 0 && value == 0) {
                return;
            }

            if (param2.length == 1 && param2[0] == 0 && value == 0) {
                return;
            }
            // 是否已存在 . 
            if (/\./.test(param1.join("")) && /\./.test(value)) {
                return;
            }
            if (/\./.test(param2.join("")) && /\./.test(value)) {
                return;
            }
            if (step === 1) {
                if (hasResult) {
                    param1 = [];
                    hasResult = false;
                }
                if (/\./.test(value)) {
                    param1.push('.');
                } else {
                    param1.push(value);
                }
                if (/^0[^.]/.test(param1.join(""))) {
                    param1.shift();
                }
                panel.innerHTML = param1.join("");
            } else if (step === 2) {
                if (/\./.test(value)) {
                    param2.push('.');
                } else {
                    param2.push(value);
                }
                if (/^0[^.]/.test(param2.join(""))) {
                    param2.shift();
                }
                panel.innerHTML = param2.join("");
            }
            // 算符
        } else if (/[\/*\-+]/.test(value)) {
            cal = value;
            step++;
            // 等号 或 百分号
        } else if (/[=%]/.test(value)) {
            // 等号
            if (/%/.test(value)) {
                cal = '%';
            }
            result = calc(param1, param2);
            panel.innerHTML = result;
            param1 = [];
            param2 = [];
            if (/%/.test(result)) {
                param1.push(parseFloat(result) / 100);
            } else {
                param1.push(parseFloat(result));
            }
            hasResult = true;
            cal = '';
            step = 1;
        } else if (/C/.test(value)) {
            param1 = [];
            param2 = [];
            result = 0;
            cal = '';
            hasResult = false;
            panel.innerHTML = 0;
        } else if (/←/.test(value)) {
            if (step === 1) {
                param1.pop();
                panel.innerHTML = param1.length == 0 ? 0 : param1.join("");
            } else if (step === 2) {
                param2.pop();
                panel.innerHTML = param2.length == 0 ? 0 : param2.join("");
            }
        }

    }
}

function calc(p1, p2) {
    var result = 0,
        param1 = parseFloat('0' + p1.join(""));
    param2 = parseFloat('0' + p2.join(""));

    if (/\+/.test(cal)) {
        result = param1 + param2;
    } else if (/-/.test(cal)) {
        result = param1 - param2;
    } else if (/\*/.test(cal)) {
        result = param1 * param2;
    } else if (/\//.test(cal)) {
        result = param1 / param2;
        if (isNaN(result)) {
            result = 0;
        }
    } else if (/%/.test(cal)) {
        if (isNaN(param1)) {
            result = 0
        } else {
            result = param1 * 100 + "%";
        }
    } else if (cal == '') {
        result = param1;
    }
    if (result == 'Infinity') {
        result = "∞"
    }
    return result;
}
