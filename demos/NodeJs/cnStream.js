var fs = require("fs");
var data = '';
//创建可读流
var readerStream = fs.createReadStream('input.txt');

//设置编码为  UTF-8
readerStream.setEncoding('UTF8');
//处理流事件  -->  data,end,and error
readerStream.on('data',function(chunk){
	data += chunk;
});

readerStream.on('end',function(){
	console.log(data);
});

readerStream.on('error',function(err){
	console.log(err.stack);
});

console.log('The writeStream progress is over !')


//写入流
var writeStream = fs.createWriteStream('output.txt');
//var mydata = "this is the first log  I write.";
var mydata = "this is the second log  I write.";

var writedData = writeStream.write(mydata,'UTF8');

writeStream.end();

//处理 -->  data,end,error

writeStream.on('finish',function(){
	console.log('写入完成:' + writedData);
});

writeStream.on('error',function(error){
	console.log(error.stack);
});

console.log('写入流执行完成。');













