// 页面点击爱心
console.log('peace & love...');
var selfstyle = document.createElement('style');
selfstyle.innerHTML = `
.love-contain{position: fixed;overflow:visibility;}
.love{position: fixed;z-index: 10000;width: 20px;height: 20px;font-size: 10px;transform: translate(0, 0px) scale(0.6);opacity: 1;}
.love.active1{animation:mymove1 1s linear infinite;}
.love.active2{animation:mymove2 1s linear infinite;}
.love.active3{animation:mymove3 1s linear infinite;}
.love.active4{animation:mymove4 1s linear infinite;}
.love.active5{animation:mymove5 1s linear infinite;}
.love.active6{animation:mymove6 1s ease-in-out infinite;}
.love.active7{animation:mymove7 1s ease-in-out infinite;}
.love.active8{animation:mymove8 1s ease-in-out infinite;}
.mid-center{position: absolute;top: 50%;left: 50%;}
.love-left{width: 1em;height: 1em;border-radius: 50%;background: red;transform: translate(-50%, -50%);}
.love-right{width: 1em;height: 1em;border-radius: 50%;background: red;transform: translate(50%, -50%);}
.love-center{width: 1em;height: 1em;transform: rotate(45deg);background: red;}
@keyframes mymove1
{
	0%   {transform: rotate(0deg) translate(0, 0) scale(0.6);opacity: 1}
	25%  {transform: rotate(15deg) translate(0, -15px) scale(0.7);opacity: 0.75}
	50%  {transform: rotate(0deg) translate(0, -30px) scale(0.8);opacity: 0.5}
	75%  {transform: rotate(-15deg) translate(0, -45px) scale(0.9);opacity: 0.25}
	100% {transform: rotate(0deg) translate(0, -60px) scale(1);opacity: 0;}
}
@keyframes mymove2
{
	0%   {transform: rotate(0deg) translate(0, 0) scale(0.6);opacity: 1}
	25%  {transform: rotate(-15deg) translate(0, -15px) scale(0.7);opacity: 0.75}
	50%  {transform: rotate(0deg) translate(0, -30px) scale(0.8);opacity: 0.5}
	75%  {transform: rotate(15deg) translate(0, -45px) scale(0.9);opacity: 0.25}
	100% {transform: rotate(0deg) translate(0, -60px) scale(1);opacity: 0;}
}
@keyframes mymove3
{
	0%   {transform: rotate(0deg) translate(0, 0) scale(0.6);opacity: 1}
	100% {transform: rotate(0deg) translate(0, -30px) scale(2);opacity: 0;}
}
@keyframes mymove4
{
	0% {opacity: 0;transform: scale3d(.3, .3, .3);}
	50%{opacity: 1;}
	100% {opacity: 0;transform: scale3d(1.5, 1.5, 1.5);}
}
@keyframes mymove5{
    0%,50%,100%{opacity:0;}
    25%,75%{opacity:1;}
}
@keyframes mymove6
{
	0%   {transform:  translate(0px, -110px) scale(1);opacity: 1}
	20%  {transform:  translate(15px, 0px) scale(0.8);}
	40%  {transform:  translate(30px, -80px) scale(0.8);}
	60%  {transform:  translate(45px, -15px) scale(0.7);}
	80%  {transform:  translate(60px, -60px) scale(0.6);}
	100% {transform:  translate(75px, -25px) scale(0.5);opacity: 0.4}
}
@keyframes mymove7
{
	100%   {transform:  translate(0px, 0px) scale(1);opacity: 1}
	75%  {transform:  translate(15px, -110px) scale(0.8);}
	50%  {transform:  translate(30px, -15px) scale(0.8);}
	30%  {transform:  translate(45px, -80px) scale(0.7);}
	15%  {transform:  translate(60px, -25px) scale(0.6);}
	0% {transform:  translate(75px, -60px) scale(0.5);opacity: 0.4}
}
@keyframes mymove8
{
	0%   {transform: rotate(360deg) translate(0px, -18px) scale(0.5);opacity: 0;}
	100% {transform: rotate(0deg) translate(-55px, -25px) scale(1.3);opacity: 1;}
}
`;
document.head.appendChild(selfstyle);

document.oncontextmenu = document.onclick =function(e){

	var x = e.clientX;
	var y = e.clientY;	
	
	var love = document.createElement('div');
	love.className = 'love';
	
	var loveLeft = document.createElement('div');
	var loveRight = document.createElement('div');
	var loveCenter = document.createElement('div');
	loveLeft.className = 'love-left mid-center';
	loveRight.className = 'love-right mid-center';
	loveCenter.className = 'love-center mid-center';
	loveLeft.style.background =
	loveRight.style.background =
	loveCenter.style.background = randColor();
	love.appendChild(loveLeft);
	love.appendChild(loveRight);
	love.appendChild(loveCenter);

	var type = parseInt(Math.random() * 9) + 0;
	if(type == 0){
		circle(x,y,love);
		return;
	}

	
	love.style.top = y - 25 + 'px';
	love.style.left = x - 16 + 'px';

	document.body.appendChild(love);

	
	var timer1 = setTimeout(function(){
		
		love.className = 'love active' + type;
		clearTimeout(timer1);
		timer1 = null;
	}, 17);
	var timer2 = setTimeout(function(e){
		document.body.removeChild(love);
		clearTimeout(timer2);
		timer2 = null;
	}, 1000);
}

function randColor(){
	var r = parseInt(Math.random() * 150 + 100);
	var g = parseInt(Math.random() * 120 + 100);
	var b = parseInt(Math.random() * 120 + 100);
	var rgb = 'rgb('+r+','+g+','+b+')'
	return rgb;
}

function circle(x, y, element){
	var contain = document.createElement('div');
	contain.className = 'love-contain';
	contain.id = 'contain';
	contain.style.top = y + 'px';
	contain.style.left = x + 'px';
	document.body.appendChild(contain);
	var arr = [0,1,2,3,4,5,6,7];
	var arr1 = [0,1,2,3,4,5,6,7];
	var j = 0;
	for(var i=0; i<8; i++){
		var duration = i * 50;
		
		arr[i] = setTimeout(function() {
			var love = element.cloneNode(true);
			love.className = 'love1';
			love.id = 'love' + j;
			var deg = (j) * 45;
			love.style = 'transform: rotate('+deg+'deg) translate(-0px, -25px) scale(0.4) ';
			contain.appendChild(love);
			
			clearTimeout(arr[j]);
			arr[j] = j;
			j++;
		}, duration);
		
	}
	var k = 0;
	for(var i=0; i<8; i++){
		var duration = i * 50 + 400;
		
		arr1[i] = setTimeout(function() {
			var love = 'love' + k;
			var love = document.getElementById(love);
			love.style.display = 'none';
			clearTimeout(arr1[k]);
			arr1[k] = k;
			if(k==7){
				document.body.removeChild(document.getElementById('contain'));
			}
			k++;
		}, duration);
		
	}	
}
