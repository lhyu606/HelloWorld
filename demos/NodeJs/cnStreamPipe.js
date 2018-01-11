var fs = require('fs');

var readerStream = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('output.txt');

//管道操作

readerStream.pipe(writerStream);

console.log('the progress is over.');
