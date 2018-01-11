process.stdout.write("Hello aloha.\n")

//通过参数读取
process.argv.forEach(function(val,index,array){
	console.log(index + ':' + val);
});

//获取执行路径
console.log(process.execPath);

console.log('平台信息：' + process.platform);
