$(window).load(function(){
	$(".lazy").lazyload();
	$(".lazy").lazyload({ threshold : 600 });
	// banner鐨勬枃瀛�
	$('.first-phone').animate({
		right: '130px',
		opacity:'1'
	},1000);
	$('.buy-now').delay(1000).animate({
		opacity:'1'
	},1000);
	var wH;
	$(window).scroll(function(){
		wH = $(window).height()*.35
		// 绗簩灞忓姩鐢绘晥鏋�
		
		if($(document).scrollTop() >= (922-wH)) {
			$(".screen-sec-con").animate({
				top: 0,
				opacity:"1"
			},800).next().delay(800).animate({
				top : "310px",
				opacity : "1"
			},800)
		}
		// 绗笁灞忓姩鐢绘晥鏋�
		if($(document).scrollTop() >= (1622-wH)) {
			$(".screen-thi-con").animate({
				top : 0,
				opacity:"1"
			},1000).addClass("on");
		}
		// 绗洓灞忓姩鐢绘晥鏋�
		if($(document).scrollTop() >= (2472-wH)) {
			$(".screen-four-con").animate({
				top : 0,
				opacity:"1"
			},700).next().children("img:last").delay(700).animate({
				top : "-84px"
			},1000).prev().delay(900).animate({
				top : "-56px"
			},800).prev().delay(1100).animate({
				top : "-28px"
			},600).prev().delay(1300).animate({
				top : "0px"
			},500);
		}
	  //5
		if($(document).scrollTop() >= (3172-wH)) {
			$(".screen-fifth h3").animate({
				top : 0,
				opacity:"1"
			},1000)
		}
		// 6
		if($(document).scrollTop() >= (4022-wH)) {
			$(".sixth-con").animate({
				top : 0,
				opacity:"1"
			},1000).prev().prev().delay(1000).animate({
				left : "410px",
				opacity:"1"
			},800).prev().delay(2000).animate({
				width : "423px"
			},1300).children("span").eq(0).delay(3400).animate({
				opacity:"1",
				top:"42px"
			},500).next().delay(4000).animate({
				opacity:"1",
				top:"124px"
			},500).next().delay(4600).animate({
				opacity:"1",
				top:"4px"
			},500)
		}
		// 6-2
		if($(document).scrollTop() >= (4722-wH)) {
			$(".screen-sixth-t h3").animate({
				top : 0,
				opacity:"1"
			},1000)
		}
		// 7
		if($(document).scrollTop() >= (5572-wH)) {
			$(".seventh-con").animate({
				top : 0,
				opacity:"1"
			},1000).next().addClass("on");
		}
		// 7-2
		if($(document).scrollTop() >= (6272-wH)) {
			$(".screen-seventh-t h3").animate({
				top : 0,
				opacity:"1"
			},1000)
		}
		// 8
		if($(document).scrollTop() >= (7122-wH)) {
			$(".eighth-con").animate({
				top : 0,
				opacity:"1"
			},700).prev().delay(700).animate({
				left : "487px",
				opacity:"1"
			},700).prev().delay(700).animate({
				bottom : "-226",
				opacity:"1"
			},700).prev().delay(700).animate({
				left : "75px",
				opacity:"1"
			},700)
		}
		//9
		if($(document).scrollTop() >= (7822-wH)) {
			$(".screen-nin-con").addClass("on").css({
				"opacity" : "1"
			})
			$(".ninth-phonel").delay(1000).animate({
				bottom : "-180px"
			},700).next().delay(1300).animate({
				bottom : "-145px"
			},700).next().delay(1600).animate({
				bottom : "-135px"
			},700);
			$(".ninth-phonel").delay(500).animate({
				"padding-top" : "82px"
			},500).children("p").delay(2800).animate({
				opacity : "1"
			},500).parent().next().delay(500).animate({
				"padding-top" : "82px"
			},500).children("p").delay(3000).animate({
				opacity : "1"
			},500).parent().next().delay(500).animate({
				"padding-top" : "82px"
			},500).children("p").delay(3200).animate({
				opacity : "1"
			},500);
		}
	});
});


$(function(){
	$(window).load(function(){
		$(".download-btn>div").hover(function(){
			$(this).children("ul").stop().slideToggle();
		})
	});
 
	// 鍥炲埌椤堕儴
	var winH = $(window).height();
	var winW = $(window).width();  
	console.log(winH)
	$('.to-top').css({
		top: winH-200+'px'
	});

	if(winW > 1600) {
		$('.to-top').css({
			right:'200px'
		});
	}
	$(window).scroll(function(){
    
        var scrollH = $(window).scrollTop();
     
        if( scrollH > winH){
            $(".to-top").show();
        }else{
            $(".to-top").hide();
        };
    });

 
  

})