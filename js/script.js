$(function() {	
	//스크롤 막기
	$("#loading").on('scroll touchmove mousewheel', function(event) {
	  event.preventDefault();
	  event.stopPropagation();
	  return false;
	});
	
	//로딩 이미지
	var loading = $("#loading").height() * 0.4;	
	$("#loading > img").css("margin-top", loading + "px");
	
	setTimeout(function() {
		//스크롤 막기 해제
		$("#loading").off('scroll touchmove mousewheel');
		
		$("#loading").css("display", "none");		
	}, 1800);
	

	//인트로 타이틀 위치값
	var intro_title = 0;
	
	if($(window).width() > 550) {			//모바일 이상
		intro_title = $("#intro > h2").css("top").replace("px", "") * 0.8;
	}else (									//모바일
		intro_title = $("#intro > h2").css("top").replace("px", "") * 0.35
	)
	
	//인트로 애니메이션
	setTimeout(function() {
		$("#intro > h2").animate({"top" : intro_title + "px"}, 600, function() {
			$("#intro .intro_left, #intro .intro_right").animate({"opacity" : "1"}, 400, function() {
				$("#intro .intro_left").animate({"left" : "0"}, 500);
				$("#intro .intro_right").animate({"right" : "0"}, 500, function() {
					$("#intro > ul li:nth-child(1)").animate({"opacity" : "1"}, 400);
					$("#intro > ul li:nth-child(2)").animate({"opacity" : "1"}, 1200);
					$("#intro > ul li:nth-child(3)").animate({"opacity" : "1"}, 1800);
					$("#intro > ul li:nth-child(4)").animate({"opacity" : "1"}, 2400);
					$("#intro > ul li:nth-child(5)").animate({"opacity" : "1"}, 3000, function() {
						$(".intro_click").animate({"opacity" : "1"}, 400);
					});
				});
			});
		});
	}, 2000);
		
	
	//메뉴 상단 고정
	var menu = $("header").offset();
	var skill = $("#skill").offset();
	
	$(window).scroll(function() {
		if($(document).scrollTop() > menu.top) {
			$("header").addClass("float");
		}else {
			$("header").removeClass("float");
		}
		
		//console.log($(document).scrollTop())
		
		//skill 애니메이션
		if($(document).scrollTop() > (skill.top - 700)) {
			$("#skill ul li:nth-child(1) .stick").animate({width : "75%"}, 1000)
			$("#skill ul li:nth-child(2) .stick").animate({width : "65%"}, 1200)
			$("#skill ul li:nth-child(3) .stick").animate({width : "70%"}, 1400)
			$("#skill ul li:nth-child(4) .stick").animate({width : "60%"}, 1600)
			$("#skill ul li:nth-child(5) .stick").animate({width : "75%"}, 1800)
			$("#skill ul li:nth-child(6) .stick").animate({width : "70%"}, 2000)
		}
	});	
	
	
	//상단 메뉴 클릭 시 슬라이드 닫힘
	$(".pc_menu ul > li").click(function() {
		slide_menu();
	});
	
	//포트폴리오 카테고리 클릭 효과
	$(".port_category ul li").click(function() {
		$(".port_category ul li").removeClass("active");
		$(this).addClass("active");
	});
	
	//반응형
	$(window).resize(function() {
		//메뉴 슬라이드
		if($(window).width() > 751) {		//모바일 이상
			$(".pc_menu").removeClass("on").show();
		}else (								//모바일
			$(".pc_menu").removeClass("on").hide()
		)
		
		//인트로 타이틀 위치값
		if($(window).width() > 550) {			//모바일 이상
			$("#intro > h2").css("top", $(window).height() * 0.3)
		}else (									//모바일
			$("#intro > h2").css("top", $(window).width() * 0.25)
		)
		
		//로딩 이미지 세로위치
		loading = $(window).height() * 0.4;
		$("#loading > img").css("margin-top", loading + "px");
	});
});

//메뉴 스크롤 이동
function menu_scroll(name) {
	var offset = $("#" + name).offset();
	
	$("html").animate({scrollTop: offset.top}, 400);
}

// 모바일 - 메뉴 슬라이드
function slide_menu() {
	if($(document).width() <= 751) {
		var menu_class = $(".pc_menu").hasClass("on");
		
		if(menu_class == false) {		//모바일 사이즈일 때
			$(".pc_menu").addClass("on").slideDown();
		}else {
			$(".pc_menu").removeClass("on").slideUp();
		}
	}
}

//포트폴리오 필터링
function portfolio(type) {
	if(type != "all") {
		$(".port_list > li").filter(':not([class*='+type+'])').fadeOut('slow');
		$(".port_list > li").filter('[class*='+type+']').fadeIn('slow');
		
	}else {
		$(".port_list > li").fadeIn('slow');		 
	}
}