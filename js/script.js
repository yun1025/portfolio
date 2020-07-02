$(function() {
	var menu = $("header").offset();
	
	$(window).scroll(function() {
		if($(document).scrollTop() > menu.top) {
			$("header").addClass("float");
		}else {
			$("header").removeClass("float");
		}
	});
});

//메뉴 스크롤 이동
function menu_scroll(name) {
	var offset = $("#" + name).offset();
	
	$("html").animate({scrollTop: offset.top}, 400);
}