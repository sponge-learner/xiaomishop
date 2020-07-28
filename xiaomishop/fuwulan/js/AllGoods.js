$(function(){
	// 载入头尾
	$(function() {
		$(".header").load("../tou.html");
	});
	$(function() {
		$(".footer").load("../fot.html");
	});
	
	//var num= $(".item").eq(1).index();
		//console.log(num);
	
	//商品折叠消失
	var isCollapse = false; //是否折叠
	
	$(".content .item .hd").click(function(){
				
		var $content=$(this).siblings(".bd");
		var $title=$(this).find(".icon");
		if(isCollapse){
			$content.css("display" , "none");
			$title.css("border","1px solid #ff6700");
			$title.css("color","#ff6700");
			$title.text("∧");
			$(this).css("border-bottom","0");
			isCollapse = false;
		}else{
			$content.css("display" , "block");
			$title.css("border","1px solid #b0b0b0");
			$title.css("color","#b0b0b0");
			$title.text("∨");
			$(this).css("border-bottom","1px solid #e0e0e0");
			isCollapse = true;
		}
	});
	
	$(".content>.item>.bd ul li").hover(function(){
		$(this).find("img").stop().animate({
			width:"90px",
			height: "90px",
			marginTop:"-10px",
		});
	},function(){
		$(this).find("img").stop().animate({
			width:"70px",
			height: "70px",
			marginTop:"0px",
		});
	});

});

