$(function() {
	//메뉴 상단 고정
	var menu = $("header").offset();
	
	$(window).scroll(function() {
		if($(document).scrollTop() > menu.top) {
			$("header").addClass("float");
		}else {
			$("header").removeClass("float");
		}
	});
	
	$(window).resize(function() {
		if($(document).width() > 751) {		//모바일 사이즈가 아닐 때
			$(".pc_menu").removeClass("on").show();
		}else (
			$(".pc_menu").removeClass("on").hide()
		)
	});
});

//메뉴 스크롤 이동
function menu_scroll(name) {
	slide_menu();
	
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