$(function() {
	//메뉴 상단 고정
	var menu = $("header").offset();
	var skill = $("#skill").offset();
	
	$(window).scroll(function() {
		if($(document).scrollTop() > menu.top) {
			$("header").addClass("float");
		}else {
			$("header").removeClass("float");
		}
		
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
		if($(document).width() > 751) {		//모바일 사이즈가 아닐 때
			$(".pc_menu").removeClass("on").show();
		}else (
			$(".pc_menu").removeClass("on").hide()
		)
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