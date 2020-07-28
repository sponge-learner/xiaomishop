$(function() {
	$(".zhuceold button").click(function() {
		//手机号正则校验
		var $shouji = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
		if ($shouji.test($(".zhuceold input").val())) {
			$(".cuowu").text("");
			layer.alert('注册成功');
			$(".zhuceold").hide();
			$(".zhucenew").show();
		} else {
			$(".cuowu").text("手机号格式错误").css("color", "orange");
		}
	});

	//密码正则校验
	var pwd = /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,}$/;

	var zhanghaoku = JSON.parse(localStorage.getItem("zhanghaoku"));
	$(".queren").click(function() {
		if (pwd.test($(".pow input").val())) {
			var username = $("input:eq(1)").val();
			var password = $("input:eq(2)").val();
			//账号密码
			var zhanghao = {
				"username": username,
				"password": password
			}

			if (zhanghaoku == null) {
				zhanghaoku = [zhanghao];
			} else {
				//判断账号是否已经存在
				var chongfu = true;
				for (var i = 0; i < zhanghaoku.length; i++) {
					if (zhanghaoku[i].username == zhanghao.username) {
						chongfu = false;
					}
				}
				if (chongfu) {
					location.href = "denglu.html";
					var n = zhanghaoku.length;
					zhanghaoku[n] = zhanghao;
				} else {
					layer.msg('此账号已存在');
				}

			}

			var str = JSON.stringify(zhanghaoku);
			localStorage.setItem("zhanghaoku", str);
			console.log(zhanghaoku);

			localStorage.setItem("username", username);
			localStorage.setItem("password", password);
			console.log(username);
			console.log(password);
		} else {
			alert("至少6位并由数字和字母组成");
		}


	});




});
