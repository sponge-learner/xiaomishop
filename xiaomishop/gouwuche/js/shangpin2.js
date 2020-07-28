$(function() {
	
	$(".head").load("../tou.html");
	$(".fot").load("../fot.html");
	

	

	
	//添加到喜欢
	var getlike = localStorage.getItem("like");
	var like = JSON.parse(getlike);
	$(".xh").click(function() {
		layer.alert('已添加到我的喜欢', {
			icon: 6,
			skin: 'layer-ext-moon'
		});
		if (like == null) {
			like = [shangpin];
		} else {
			var n = like.length;
			like[n] = shangpin;
		}
		var str = JSON.stringify(like);
		localStorage.setItem("like", str);
		return localStorage.setItem("like", str);
	});
	//将商品添加到购物车函数
	function gouwu(shangpin) {
		var get = localStorage.getItem("cangku");
		var cangku = JSON.parse(get);
		if (JSON.stringify(cangku).indexOf(JSON.stringify(shangpin)) == -1) {
			if (cangku == null) {
				cangku = [shangpin];
			} else {
				var n = cangku.length;
				cangku[n] = shangpin;
			}
			var str = JSON.stringify(cangku);
			localStorage.setItem("cangku", str);
			return localStorage.setItem("cangku", str);
		}
	};
	//点击按钮触发  购买函数
	$(".buy").click(function() {
	
		gouwu(shangpin);
	
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
	// 修改地址
	$(".zhanshi .dizhi span a").click(function() {
		console.log("ff");
		// $(this).a
	});


	// 点击切换背景
	$(".zhanshi .banben ul li ").click(function() {
		// var idx = $(this).index();
		// console.log(idx);
		$(".zhanshi .banben ul li ").removeClass("sele");
		$(this).addClass("sele");

		$(".zhanshi .banben ul").find(".sele").css({
			"border": "1px solid orange",
		});

		$(".zhanshi .banben ul .sele a").children("span:first-child").css({
			"color": "orange",
		});

		$(".zhanshi .banben ul li").not(".sele").children("a").children("span").css({
			"color": "#000000",
		});

		$(".zhanshi .banben ul li").not(".sele").css({
			"border": "1px solid #E6E6E6",
		});
		// 计算价钱
		var total = computeTotal();
		$(".jiesuan .zongji span").text(total);

	});

	$(".zhanshi .yanse ul li ").click(function() {
		// var idx = $(this).index();
		// console.log(idx);
		$(".zhanshi .yanse ul li ").removeClass("sele");
		$(this).addClass("sele")
		$(".zhanshi .yanse ul").find(".sele").css({
			"border": "1px solid orange"
		});
		$(".zhanshi .yanse ul .sele a").children("span").css({
			"color": "orange",

		});
		$(".zhanshi .yanse ul li").not(".sele").children("a").children("span").css({
			"color": "#000000",

		});
		$(".zhanshi .yanse ul li").not(".sele").css({
			"border": "1px solid #E6E6E6"
		});

	});
	// 点击选项
	$(".zhanshi .baohu ul li input").click(function() {
		$(this).parent().siblings().children("input").prop("checked", false);
		var mc = $(this).parent().children(".fuwu").text();
		var jq = $(this).parent().children(".jiaqian").text();


		var checked = $(this).prop("checked");
		var idx = $(this).parent("li").index();
		$(".zhanshi .baohu ul li").eq(idx).children("input").prop("checked", checked);

		if (checked) {
			$(".jiesuan .baozhangfuwu span:first-child").text(mc);
			$(".jiesuan .baozhangfuwu span:last-child").text(jq);
			$(this).parent().css({
				"border": "1px solid orange"
			});

			$(this).parent().siblings().css({
				"border": "1px solid #E6E6E6"
			});

		} else {
			$(".jiesuan .baozhangfuwu span:first-child").html("");
			$(".jiesuan .baozhangfuwu span:last-child").html("");
			$(this).parent().css({
				"border": "1px solid #E6E6E6"
			});
		}
	});
	$(".zhanshi .baoxiu ul li input").click(function() {
		var mc = $(this).parent().children(".fuwu").text();
		var jq = $(this).parent().children(".jiaqian").text();
		console.log("mc,jq");
		var checked = $(this).prop("checked");
		$(".zhanshi .baoxiu ul li input").prop("checked", checked);
		
		if (checked) {
			$(".jiesuan .baoxiufuwu span:first-child").text(mc);
			$(".jiesuan .baoxiufuwu span:last-child").text(jq);
			$(this).parent().css({
				"border": "1px solid orange"
			});

			$(this).parent().siblings().css({
				"border": "1px solid #E6E6E6"
			});

		} else {
			$(".jiesuan baoxiufuwu span:first-child").html("");
			$(".jiesuan baoxiufuwu span:last-child").html("");
			$(this).parent().css({
				"border": "1px solid #E6E6E6"
			});
		}
	});
	// 点击后输出价格
	function computeTotal() {
		var sum = 0;
		$(".zhanshi .baohu ul li :checked").each(function(index, item) {
			var price = $(this).parents("ul").children("li").children(".jiaqian").text();

			sum += parseFloat(price);
		});
		return sum;
	};


	function computeTotal() {
		var sum = 0;
		$(".zhanshi .baohu ul li :checked").each(function(index, item) {
			var price = $(this).parents("ul").children("li").children(".jiaqian").text();

			sum += parseFloat(price);
		});
		return sum;
	};

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
