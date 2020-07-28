$(function() {
	//登录模式的选择显示
	var zhanghaoku = JSON.parse(localStorage.getItem("zhanghaoku"));
	console.log(zhanghaoku);

	$(".saoma").click(function() {
		$(".denglu>div:nth-child(2)").css("display", "none");
		$(".erweima").css("display", "block")

	});
	$(".zhanghao").click(function() {
		$(".denglu>div:nth-child(2)").css("display", "block");
		$(".erweima").css("display", "none")

	});
	//获取输入的账号密码
	var use = localStorage.getItem("username");
	// var paw = localStorage.getItem("password");
	//点击事件并判断账号密码的正确性
	$("button").click(function() {
		var zhanghao = $("input:eq(0)").val();
		var mima = $("input:eq(1)").val();
		var success = false;
		for (var i = 0; i < zhanghaoku.length; i++) {
			if (zhanghaoku[i].username == zhanghao && zhanghaoku[i].password == mima) {
				localStorage.setItem("username", zhanghaoku[i].username);
				success = true;
			}
		}
		if (success) {
			location.href = "../zhuye/index.html";
		} else {
			layer.msg('账号密码错误');
		}

		//用json储存写死的账号密码 和  注册的账号密码
		// $.getJSON("../data/phone.json", function(shuju) {
		// 	var success = false;
		// 	//判断是否存在已注册的账号
		// 	for (var i = 0; i < shuju.zhanghao.length; i++) {
		// 		if (shuju.zhanghao[i].username == zhanghao && shuju.zhanghao[i].password == mima) {
		// 			success = true;
		// 			var jsonuser = shuju.zhanghao[i].username;
		// 			var str = JSON.stringify(jsonuser);
		// 			localStorage.setItem("username", str);
		// 			location.href = "../zhuye/index.html";
		// 		}
		// 	}
		// 	console.log(success);
		// 	//判断注册的账号
		// 	if (zhanghao == use && mima == paw || success) {
		// 		location.href = "../zhuye/index.html";
		// 	} else {
		// 		alert("账号密码错误");
		// 	}

		// });
	});

});
