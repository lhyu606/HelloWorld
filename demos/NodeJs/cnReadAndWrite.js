var fs = require('fs');

console.log('准备写入文件');
fs.writeFile('input.txt','我是通过写入的文件内容.',function(error){
	if(error){
		return console.error(error);;
	}
	console.log('文件写入成功.');
	console.log('-------我是分割线--------');
	console.log('读取写入的数据.');
	fs.readFile('input.txt',function(error,data){
		if(error){
			return console.error(error);
		}
		console.log('异步读取文件数据: ' + data.toString());
	});
});
