$(function() {
	$(".fot").load("../fot.html");

	//拉取地址库
	var get = localStorage.getItem("dizhiku");
	var dizhiku = JSON.parse(get);
	console.log(dizhiku);

	var cangku = JSON.parse(localStorage.getItem("cangku"));
	console.log(cangku);
	var sum = 0;
	for (var i = 0; i < cangku.length; i++) {
		console.log("1");
		if (cangku[i].shuxing == "true") {
			var jiage = cangku[i].jiage * cangku[i].shuliang;
			sum += parseFloat(cangku[i].jiage) * parseFloat(cangku[i].shuliang);
			$(".shangpin>table").append("<tr><td>" + cangku[i].name + "</td><td>" + cangku[i].jiage + "元<span>×" + cangku[i]
				.shuliang +
				"</span><td>" + jiage + "元</tr>")
		}
	}
	$(".jiezhang>span>span").text(sum);

	//增加地址界面
	$(".adddizhi").click(function() {
		$(".zengjiadizhi").fadeIn();
	});

	//对地址库进行判断  是否有值
	if (dizhiku !== null) {
		//增加地址函数
		function adddizhi() {
			for (var i = 0; i < dizhiku.length; i++) {
				$(".dizhi").append("<div><div>姓名：<span>" + dizhiku[i].name + "</span></div><div>	地址：<span>" + dizhiku[i].dizhi +
					"</span>	</div><div>电话：<span>" + dizhiku[i].dianhu + "</span></div><button type='button'>删除</button></div>")
			}
			$(".zengjiadizhi button").click(function() {
				var $name = $("#xingming").val();
				var $dizhi = $("#dizhi").val();
				var $dianhua = $("#dianhua").val();
				adddizhi($name, $dizhi, $dianhua);
				$(".zengjiadizhi").fadeOut();
				var address = {
					name: $name,
					dizhi: $dizhi,
					dianhu: $dianhua
				}
				if (dizhiku == null) {
					dizhiku = [address];
				} else {
					var n = dizhiku.length;
					if (n > 3) {} else {
						dizhiku[n] = address;
					}

				}
				console.log(dizhiku);
				var str = JSON.stringify(dizhiku);
				localStorage.setItem("dizhiku", str);
				history.go(0)
			});
		};
		adddizhi();
		//判断地址是否为空
		$(".jiesuan").click(function() {
			if (dizhiku == "") {
				layer.msg('请您添加收货地址');
			} else {
				location.href = "zaixianzhifu.html";
			};

		});
	} else {
		$(".zengjiadizhi button").click(function() {
			var $name = $("#xingming").val();
			var $dizhi = $("#dizhi").val();
			var $dianhua = $("#dianhua").val();
			// adddizhi($name, $dizhi, $dianhua);
			$(".zengjiadizhi").fadeOut();
			var address = {
				name: $name,
				dizhi: $dizhi,
				dianhu: $dianhua
			}
			if (dizhiku == null) {
				dizhiku = [address];
			} else {
				var n = dizhiku.length;
				if (n > 3) {} else {
					dizhiku[n] = address;
				}
			}
			console.log(dizhiku);
			var str = JSON.stringify(dizhiku);
			localStorage.setItem("dizhiku", str);
			history.go(0)
		});
		$(".jiesuan").click(function() {
			layer.msg('请您添加收货地址');
		});
	};


	$(".adddizhi~div button").click(function() {
		var $n = $(this).parent("div").index() - 1;
		dizhiku.splice($n, 1);
		var xindizhiku = JSON.stringify(dizhiku);
		localStorage.setItem("dizhiku", xindizhiku);
		//重新加载页面
		history.go(0)
	});
});
