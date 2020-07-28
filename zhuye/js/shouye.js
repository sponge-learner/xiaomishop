$(function() {
	// 划过菜单列表
	$(".menu .liebiao .caidan ul li ").hover(function(){
		var idx = $(this).index();
		console.log(idx);
		$(".menu .liebiao .leixing").eq(idx).show();
		// $(".menu .liebiao .tupian").hide();
		
		
		
	},function(){
		$(".menu .liebiao .leixing").hide();
		// $(".menu .liebiao .tupian").show();
	});
	
$(".leixing").hover(function(){
		console.log("123");
		$(this).stop().show();
		// $(".menu .liebiao .tupian").hide();
		
	},function(){
		$(this).stop().hide();
		// $(".menu .liebiao .tupian").show();
	});
		
	// 轮播
	var swiper = new Swiper(".swiper-container", {
					loop: true,
					autoplay: true,
					// effect: 'fade',
					autoplay: {
						disableOnInteraction: false,
					},
					pagination: {
						el: ".swiper-pagination",
						clickable: true
					},
					navigation: {
						prevEl: ".swiper-button-prev",
						nextEl: ".swiper-button-next"
					},
				});
	
	
	
	// 家电
	$(".centre .jiadian span a").hover(function() {
		var idx = $(this).parent().index();
		if (idx == 1) {
			$(".centre .jiadian .top").addClass("sele");
			$(".centre .jiadian .bot").removeClass("sele");

		} else if (idx == 0) {
			$(".centre .jiadian .top").removeClass("sele");
			$(".centre .jiadian .bot").addClass("sele");
		};
	});
	// 智能
	$(".centre .zhineng span a").hover(function() {
		var idx = $(this).parent().index();
		if (idx == 2) {
			$(".centre .zhineng .top").removeClass("sele");
			$(".centre .zhineng .cnt").removeClass("sele");
			$(".centre .zhineng .bot").addClass("sele");

		} else if (idx == 1) {
			$(".centre .zhineng .top").addClass("sele");
			$(".centre .zhineng .bot").removeClass("sele");
			$(".centre .zhineng .cnt").removeClass("sele");

		} else if (idx == 0) {
			$(".centre .zhineng .cnt").addClass("sele");
			$(".centre .zhineng .bot").removeClass("sele");
			$(".centre .zhineng .top").removeClass("sele");
		}
	});
	// 搭配
	$(".centre .dapei span a").hover(function() {
		var idx = $(this).parent().index();
		if (idx == 1) {
			$(".centre .dapei .top").addClass("sele");
			$(".centre .dapei .bot").removeClass("sele");

		} else if (idx == 0) {
			$(".centre .dapei .top").removeClass("sele");
			$(".centre .dapei .bot").addClass("sele");
		};
	});
	// 配件
	$(".centre .peijian span a").hover(function() {
		var idx = $(this).parent().index();
		if (idx == 2) {
			$(".centre .peijian .top").addClass("sele");
			$(".centre .peijian .cnt").removeClass("sele");
			$(".centre .peijian .bot").removeClass("sele");

		} else if (idx == 1) {
			$(".centre .peijian .top").removeClass("sele");
			$(".centre .peijian .bot").removeClass("sele");
			$(".centre .peijian .cnt").addClass("sele");

		} else if (idx == 0) {
			$(".centre .peijian .cnt").removeClass("sele");
			$(".centre .peijian .bot").addClass("sele");
			$(".centre .peijian .top").removeClass("sele");
		}
	});
	// 周边
	$(".centre .zhoubian span a").hover(function() {
		var idx = $(this).parent().index();
		if (idx == 1) {
			$(".centre .zhoubian .top").addClass("sele");
			$(".centre .zhoubian .bot").removeClass("sele");

		} else if (idx == 0) {
			$(".centre .zhoubian .top").removeClass("sele");
			$(".centre .zhoubian .bot").addClass("sele");
		};
	});



	// 让图片动起来
	
	$(".centre .shouji .lft ").hover(function() {
		$(this).find("img").stop().animate({
			marginTop: "-2px"
		}).css("box-shadow","0 15px 15px rgba(0,0,0,0.2)");

	}, function() {
		$(this).find("img").stop().animate({
			marginTop: "2px"
		}).css("box-shadow","none");
	});
	$(".centre ul li ").hover(function() {
		$(this).stop().animate({
			marginTop: "-2px"
		}).css("box-shadow","0 15px 15px rgba(0,0,0,0.2)");

	}, function() {
		$(this).stop().animate({
			marginTop: "2px"
		}).css("box-shadow","none");
	});
	$(".centre ul li  ").hover(function() {
		$(this).find("dl").stop().animate({
			marginTop: "-5px"
		}).css("box-shadow","0 15px 15px rgba(0,0,0,0.2)");

	}, function() {
		$(this).find("dl").stop().animate({
			marginTop: "5px"
		}).css("box-shadow","none");
	});
	
	// 回到顶部
	$(".anniu ul li:last-child").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, );
	});
	// 隐藏回到顶部按钮
	$(window).scroll(function() {
		if ($(document).scrollTop() < 350) {
			$(".anniu ul li:last-child").stop().fadeOut(500);
		} else {
			$(".anniu ul li:last-child").stop().fadeIn(500);
		};
	});



});
