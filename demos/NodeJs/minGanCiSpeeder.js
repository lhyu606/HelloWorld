// 爬虫抓取文章内容查找敏感词汇 ：“年化收益”

var superagent = require('superagent');
var cheerio = require('cheerio');
var express = require('express');
var url = require('url');


var app = express();

app.get('/',function(req,res,next){  res.header("Access-Control-Allow-Origin", "*"); 
	var mulu = 'https://www.lending51.com/Posts/view/';
	var url = '';
	var content = '';
	var result = [''];
	var num = 0;
	var j = 0;
	
	for (i=9;i<209;i++) {
		url = mulu + i;
		path(url,i);
	}
	
	function path(url,k){
		superagent.get(url)
		.end(function(err,sres){
			if(err){
				return next(err)
			}
			
			var $ = cheerio.load(sres.text);
			var re = /&#x5E74;&#x5316;&#x6536;&#x76CA;/;// 年化收益
			content = $(".post-main-content").html() + '';// 获取内容
			if(re.test(content)){
				result.push(k);
				console.log("k => "+ k + '\n');
				num++;
				/*if(num%5==0){
					result.push( '<br/><br/>');
				}*/
			}
			j++;
			
			if(j >= 200){
				result.sort(function(a,b){return a - b;})
				
				out = result.join('&nbsp;&nbsp;&nbsp;')
				out += '<br/><br/>总共发现  '+num+'  篇文章';
				res.send('<div style="width=200px">'+ out +'</div>');
				console.log('overdoes ....');
			}
			//console.log('over--1 ....' + j);
		})
	}
	
	
});

app.listen(3000,function(req,res){
	console.log('The app is listening at port 3000.....')
})
//月朗风清，疏影皎洁，
/*
 * 获得章节，转成中文
 * 获得    link  进行拼接
 * 
 * */