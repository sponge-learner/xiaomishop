$(function() {

	$(".fot").load("../fot.html");
	// 获取加入购物车的商品
	//localStorage.getItem("cangku")获取一串字符串
	//JSON.parse();将获取的字符串转化成数组
	var cangku = JSON.parse(localStorage.getItem("cangku"));
	var username = localStorage.getItem("username");
	console.log(username);
	var sum = 0;
	if (cangku !== null) {
		for (var i = 0; i < cangku.length; i++) {
			$(".gouwuche").append("<tr><td><input type='checkbox' /></td><td>" + cangku[i].name + "</td><td>" + cangku[i].picture +
				"</td><td>" +
				cangku[i].jiage + "</td><td><button type='button'>-</button><span>" + cangku[i].shuliang +
				"</span><span>件</span><button type='button'>+</button></td><td><button type=button'>删除</button></td></tr>")
			// sum += parseFloat(cangku[i].jiage) * parseFloat(cangku[i].shuliang);				
		}

		$(".jiesuan").click(function() {
			console.log("111");
			//判断购物车是否为空
			if (cangku.length == 0) {
				layer.msg('您的购物车是空的');
				alert("您的购物车是空的");
			} else {
				//判断商品是否选中 进行结算
				for (var i = 0; i < cangku.length; i++) {
					var n = i + 1;
					if ($(".gouwuche tr input:eq(" + n + ")").prop("checked") == true) {
						cangku[i].shuxing = "true";
						var xincangku = JSON.stringify(cangku);
						localStorage.setItem("cangku", xincangku);
					} else {
						cangku[i].shuxing = "false";
						var xincangku = JSON.stringify(cangku);
						localStorage.setItem("cangku", xincangku);
					}

				}
				//进行跳转
				if ($(".zongjia").text() == 0) {
					layer.msg('您当前未选中任何商品');
				} else {
					if (username == null) {
						alert("您还未登录");
						location.href = "../zhuye/denglu.html";
					} else {
						location.href = "../gouwuche/querendingdan.html";
					}

				}
			}
		});
	} else {
		$(".jiesuan").click(function() {
			layer.msg('您的购物车当前为空');
			//墨绿深蓝风

		});
	}
	//个人中心的出现消失
	$(".zhongxin").hover(function() {
		$(this).find("div").stop().slideDown();
	}, function() {
		$(this).find("div").stop().slideUp();
	});

	// $(".jiesuan").click(function() {
	// 	alert("您本次一共消费" + sum + "元");
	// 	// localStorage.setItem("cangku",null);
	// });
	//数量增加点击按钮事件  商品增加
	$(".gouwuche tr>td:nth-child(5) button:nth-child(even)").click(function() {
		console.log("+");
		var $n = $(this).parents("tr").index() - 1;
		var zongjia = $(".zongjia").text()
		if (zongjia !== "0") {
			var jiage = parseFloat(zongjia) + parseFloat(cangku[$n].jiage);
			$(".zongjia").text(jiage);
		}

		console.log();
		console.log(cangku);
		cangku[$n].shuliang = cangku[$n].shuliang + 1;
		var xincangku = JSON.stringify(cangku);
		localStorage.setItem("cangku", xincangku);
		//重新加载页面location=location
		// location.reload();
		for (var i = 1; i <= cangku.length; i++) {
			var xinshuliang = cangku[i - 1].shuliang;
			$(".gouwuche tr:eq(" + i + ")>td:nth-child(5)>span:eq(0)").text(xinshuliang);
		}

	});
	//商品删除
	$(".gouwuche tr>td:nth-child(6) button").click(function() {
		var $n = $(this).parents("tr").index() - 1;
		cangku.splice($n, 1);
		var xincangku = JSON.stringify(cangku);
		localStorage.setItem("cangku", xincangku);
		//重新加载页面
		history.go(0);
	});
	//商品数量减少点击按钮事件
	$(".gouwuche tr>td:nth-child(5) button:nth-child(odd)").click(function() {
		var $n = $(this).parents("tr").index() - 1;
		var zongjia = $(".zongjia").text()
		if (zongjia !== "0") {
			var jiage = parseFloat(zongjia) - parseFloat(cangku[$n].jiage);
			$(".zongjia").text(jiage);
		}
		cangku[$n].shuliang = cangku[$n].shuliang - 1;
		for (var i = 1; i <= cangku.length; i++) {
			var xinshuliang = cangku[i - 1].shuliang;
			$(".gouwuche tr:eq(" + i + ")>td:nth-child(5)>span:eq(0)").text(xinshuliang);
		}

	});
	// 更新仓库
	// var xincangku = JSON.stringify(cangku);
	// localStorage.setItem("cangku", xincangku);
	// localStorage.setItem("cangku",cangku);
	// $(".gouwuche tr input").click(function() {
	// 	for (var i = 1; i <= cangku.length; i++) {

	// 		var panduan = $(".gouwuche tr:eq(" + i + ") input");
	// 		if (panduan.is(":checked")) {
	// 			cangku[i].shuxing = "true";
	// 			var xincangku = JSON.stringify(cangku);
	// 			localStorage.setItem("cangku", xincangku);
	// 		} else {
	// 			cangku[2].shuxing = "false";
	// 			var xincangku = JSON.stringify(cangku);
	// 			localStorage.setItem("cangku", xincangku);
	// 		}
	// 	}
	// 	console.log(cangku);
	// });
	//商品总价计算
	function zongjia(cangku) {
		var sum = 0;
		for (var i = 1; i <= cangku.length; i++) {
			var panduan = $(".gouwuche tr:eq(" + i + ") input");
			if (panduan.is(":checked")) {
				var w = $(".gouwuche tr:eq(" + i + ")>td:eq(3)").text();
				var n = parseFloat($(".gouwuche tr:eq(" + i + ")>td:eq(4)>span").text());
				sum += w * n;
				console.log(sum, w, n);
			}
		};
		return sum;
	};




	$(".gouwuche tr input").click(function() {
		var sum = zongjia(cangku);
		$(".zongjiner>span:eq(1)").text(sum);
		console.log(cangku);
	});
	console.log(cangku);
	//全选按钮
	$(".gouwuche tr:eq(0) input").click(function() {
		var checked = $(this).prop("checked");

		$(".gouwuche tr input").prop("checked", checked);
		var sum = zongjia(cangku);
		$(".zongjiner>span:eq(1)").text(sum);
	});


});
