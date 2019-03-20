var i = 0;
var doHide = false;
document.oncontextmenu = function (event) {
	if (!doHide) {console.log('不隐藏....');return;}
	var event=event||window.event;//兼容IE

	var target = event.target;
	target.style.display = 'none';
	console.log('隐藏了 ' + (++i) + ' 个。');
	// 阻止时间冒泡
	event.stopPropagation();
	 //取消事件相关的默认行为
	if(event.preventDefault){
	 	//标准技术
	 	event.preventDefault();
	} 
	if(event.returnValue) {
		 //兼容IE9之前的IE
		 event.returnValue=false;
		 return false;
	}
	
}


document.onkeyup = function (e) {
	if (e.keyCode == 17) {
		doHide = !doHide;
	}
}