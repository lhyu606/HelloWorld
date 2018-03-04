// 手机版首页 脚本
$(function(){

var timer = null;
// tab 标签状态
$(".tab").on('click',function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});

// 服务模块
$(".plat-item").click(function(){
    $(this).toggleClass('active');
    timer = setTimeout(function(){
        scroll.refresh();
    },200);
});

// 滚动插件
$('body').height(window.innerHeight);
var scroll = new BScroll('body',{
    probeType: 3,
    click: true
});
window.onresize = function(){
    $('body').height(window.innerHeight);
    scroll.refresh();
}

// 轮播

liMarquee = {
    el : null,
    height : 0,
    speed : 1500,
    timer : null,
    duration : 2000,
    canMove : true,
    dir:'',
    init : function(el,dir,speed,duration){
        var that = this;
        this.el = el;
        this.dir = dir;
        this.speed = speed?speed:this.speed;
        this.duration = duration?duration:this.duration;
        var childHeight = $(this.el).children().height();
        
        // 复制一份所有子元素并添加
        $(this.el).append($(this.el).children().clone());
        this.timer = setInterval(function(){
            if(that.canMove){
                that.height -= childHeight;
                if(Math.abs(that.height) >= $(that.el).height()){
                    $(that.el).css({top:0});
                    that.height = 0;
                    that.height -= childHeight;
                }
                that._animate();
            }
        },this.duration);
        $(this.el).on('mouseenter',function(){
            that.canMove = false;
        }).on('mouseleave',function(){
            that.canMove = true;
        });
        window.onresize = function(){
            childHeight = $(that.el).children().height();
        }
    },
    _animate : function(){
        var that = this;
        $(this.el).animate({
                top:this.height
            },this.speed,'linear');
    }
}
var ann = liMarquee.init($('.ann-list')[0],'up');
//var slider = new liMarquee.init();
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay:3000,
    speed:1000
});
});