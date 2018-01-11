var fs = require("fs");

var data = fs.readFileSync("input.txt");

console.log(data.toString());
console.log("程序执行结束！");

console.log("--------------事件------------");
var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
	console.log('连接成功！');
	eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function(){
	console.log("数据接收成功！");
});

//触发事件
eventEmitter.emit('connection');

console.log('progress is over.');

console.log("--------------缓冲区------------");
var buf = new Buffer('www.runoob.com');
var Buf = new Buffer(26);
for(var i=0;i<Buf.length;i++){
	Buf[i] = i + 97;
}
var str = Buf.toString('ascii',0,5);
var json = buf.toJSON(buf);

console.log(str,'\n',json);//json.data,,json.type->'Buffer'

//缓冲区合并          Buffer.concat(list[, totalLength])
//                                 合并后Buffer对象总长度

//栗子            Buffer3 = Buffer.concat([buf1,buf2],10);
 
var buf1 = new Buffer('abc');
var buf2 = new Buffer('ABC');
var result = buf1.compare(buf2);//缓冲区比较
if(result < 0){
	console.log(buf1 + " 在 " + buf2 + ' 之前');
}else if(result == 0){
	console.log(buf1 + " 与 " + buf2 + ' 相同');
}else if(result > 0){
	console.log(buf1 + " 在 " + buf2 + ' 之后');
}


var buf3 = Buffer.concat([buf1,buf2]);
console.log("buf3:"+buf3.toString());


//缓冲区复制
//buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
var buf4 = new Buffer(3);
buf1.copy(buf4);
console.log("buf4:"+buf4.toString());

//裁剪
console.log(buf4.slice(1).toString(),'\n buf4的长度：'+buf4.length);
