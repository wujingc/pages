$(function(){
	init();	
	// 创建三个下拉框
	var optionsSelect = $(".chazhao .options .select");
	for (var i = 0; i < optionsSelect.length; i++) {
		optionEvent(optionsSelect[i]);
	
	// 创建动画效果
	var tuwenImg = $(".tuwen img")[0];
	animateTuwen({
		obj : tuwenImg,
		attr : {opacity:1,margintop:80},
		speed : 800,
		fn : function(){
			$(".tuwen .tuwen-text").animate({opacity: "1", "margin-top": "90px"}, 800);
		}
	});
	}
});

/* =================
顶部导航红色条滑动效果
====================*/
var changeColor = function(){
	var slidebar = $("<span class='slide'></span>");
	$(".top-mid ul").append(slidebar);
	$(".slide").css({
		position: 'absolute',
		display: 'inline-block',
		top: '57px',
		"border-top": '3px solid red',
		width: '84px',
		right: '338px'
	});
	$(".top-mid li").hover(function() {
	var cindex = $(".top-mid li").index(this);
	var rightIndex = 338 - cindex*84;
		$(".slide").stop().animate({right: rightIndex}, 300);
	},function(){
		$(".slide").stop().animate({right: "338px"}, 300);
	});
}

/*=============
自定义下拉框效果
==============*/

var createOption = function(){
	var selectData = {
		0:"<ul><li>中国</li><li>美国</li><li>英国</li><li>法国</li></div>",
		1:"<ul><li>河南省</li><li>湖南省</li><li>河北省</li><li>广东省</li></div>",
		2:"<ul><li>河源市</li><li>中山市</li><li>广州市</li><li>深圳市</li></div>"
	}
	var option = {};
	for (var i in selectData){
		option[i] = $("<div class = 'option'>"+selectData[i]);
		$(".chazhao .options .select").eq(i).append(option[i]);
	}

	$(".chazhao .options .option").css({
		width: '236px',
		"box-sizing":"border-box",
		"background-color": 'rgb(227,227,229)',
		color: '#B3B3B3',
		position:'absolute',
		display:'none',
		border: '2px solid #AE7271',
		"border-top":"none",
		"margin-left":"-2px",
		"margin-top":"-2px",
		"z-index": "99px"
	});
}


var optionEvent = function(obj){
	
	obj.flag = true ;
	obj.flag1 = true;

	$(document).click(function(e) {
		obj.flag = true;
		obj.flag1 = true;
		// console.log('1');
		$(obj).find(".option").css({
			display: 'none'
		});
		$(obj).css({
			border: '1px solid #C6B3AF'
		});
	});

	$(obj).click(function(event) {
		// event.stopPropagation();
		if(obj.flag1){
			event.stopPropagation();
			obj.flag1 = !obj.flag1;
		}
		else{	
			obj.flag1 = !obj.flag1;
			return true;
		}

	if(obj.flag){
		$(this).find(".option").css({
			display: 'block'                        //可以用show，hide
		});
		// console.log($(".chazhao .options .select").eq(i));  利用这种在这里找不到元素
		//如果样式多的情况下，就在css创建一个.active
		$(this).css({
			border: '2px solid #AE7271',
			"border-bottom": "none"
		});           
		$(this).find("li").hover(function() {
			$(this).css('background-color', 'rgb(198,78,72)');
		}, function() {
			$(this).css('background-color', 'rgb(227,227,229)');
		});
		obj.flag = !obj.flag;
			$(this).find("li").click(function() {
			var val = $(this).text();
			var sIndex = $(".chazhao .options .select").index(obj);
			$(this).parents().find(".select").eq(sIndex).find("span").text(val).css('color', 'black');
		});	
	}
	else{

		$(this).find(".option").css({
			display: 'none'
		});
		$(this).css({
			border: '1px solid #C6B3AF'
		});

		obj.flag = !obj.flag;
	}
});
}
	

/*页面刷新加载动画效果*/
var animateAd = function(){
	// $(".ad .ad-left").fadeIn(2000);
	$(".ad-wrap").animate({opacity: "0"}, 2500,function(){
	});
	$(".ad .ad-left").animate({top: "250px",opacity: "1"}, 1800);
}

/*滚轮滑到相应位置出发动画效果*/
var animateTuwen = function(para){      
	window.onscroll = function(){
	var scroll = $(window).scrollTop();
	// var scrollTop = $(".tuwen")[0].offsetTop + 200;
	var scrollTop = $(para.obj).offset().top + 100;
	var documentHeight = $(window).height();
	var onCompare = (scrollTop < scroll + documentHeight) ? true : false;
	if (onCompare) {
	//jquery解决方案
		$(para.obj).animate({opacity: para.attr.opacity, "margin-top": para.attr.margintop}, para.speed,para.fn);

	// css3解决方案，设置之后进行监听
// 	 $(".tuwen img").css({opacity: "1", "margin-top": "80px"}).one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionEnd TransitionEnd', function(){
//   	 $(".tuwen .tuwen-text").css({opacity: "1", "margin-top": "90px"});
// });
	}
}
}

/*===============
导航动画效果
================*/
var animateShow = function(){
	var productShow = $("<div class='product-show'></div>").css({
		 height: '60px',
		 width: '100%',
		 display: 'none',
		 position: 'absolute',
		 top:'60px',
		 // left: -l,
		 "background-color": 'white',
		 // float: 'left',
		"z-index": '10'
	});
	$("header").after(productShow);
	var animate_flag = 1;
	var animate_flag1 = 1;
	$(".top-mid").hover(function(event) {
			$(productShow).stop(true).slideDown('normal');
			}
	,function(){
			$(productShow).stop(true).slideUp('normal');
		});
	$(productShow).hover(function(event) {
			$(productShow).stop(true).show();
		},function(){
			$(productShow).stop(true).slideUp('normal');
		});
} 

/*===============
初始化函数
*===============*/
var init = function(){
	changeColor();
	createOption();
	animateAd();
	// animateShow();
}


