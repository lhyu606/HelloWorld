var http = require('http');
var url = require('url');
var fs = require('fs');
function start(route){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log('Request for ' + pathname + ' received.')
		request.on('data',  function(chunk){
			//console.log('收到的数据：'+ chunk)
			var data = fs.readFileSync('datas.js');
			//console.log("同步读取: " + data.toString());
			var newData = data.toString();
			chunk = chunk.toString().split('=')
			newData = newData.substring(0,newData.length-1)+ ',\n\"' + chunk[0] + '\"' + ':\"' + chunk[1] + '\"' + '\n }';
			console.log('数据长度： '+(chunk[1]+'').length)
			fs.writeFile('datas.js', newData,  function(err) {
			   if (err) {
			       return console.error(err);
			   }
			   console.log("数据写入成功！");
			});
		})
		route(pathname);
		
		response.writeHead('200',{'content-Type':'text/plain','Access-Control-Allow-Origin':'*'});
		response.write('Hello aloha');
		response.end();
	}
	http.createServer(onRequest).listen(8889);
	console.log('Server has started.');
}

exports.start = start;
