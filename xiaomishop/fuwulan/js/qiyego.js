$(function() {
	// 载入头尾
	$(function() {
		$(".header").load("header.html");
	});
	$(function() {
		$(".footer").load("footer.html");
	});
	
	//鼠标滑过商品
	$(".public .content ul li").hover(function(){
		// $(this).css("box-shadow","0 0 2px 2px gray");
		$(this).css("cursor","pointer");
		$(this).find(".denglu").stop().animate({
			bottom: "0px"
		});
	},function(){
		// $(this).css("box-shadow","none");
		$(this).find(".denglu").stop().animate({
			bottom: "-38px"
		});
	});
});
