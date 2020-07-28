$(function() {
	$(".fot").load("../fot.html");
	$(".zhongxin").hover(function() {
		$(this).find("div").stop().slideDown();
	}, function() {
		$(this).find("div").stop().slideUp();
	});
	var dingdanku = JSON.parse(localStorage.getItem("dingdanku"));
	console.log(dingdanku);
	//购物车数量显示
	var cangku = JSON.parse(localStorage.getItem("cangku"));
	// console.log(cangku.length);
	var zongjia = 0
	//判断dizhiku和cangku是否有数据再进行操作
	if (cangku !== null && dizhiku !== null) {

		for (var i = 0; i < cangku.length; i++) {
			if (cangku[i].shuxing == "true") {
				zongjia += parseInt(cangku[i].shuliang) * parseInt(cangku[i].jiage);
			}
		}
		$(".zongjia").text(zongjia);
		var get = localStorage.getItem("dizhiku");
		var dizhiku = JSON.parse(get);
		var n = dizhiku.length - 1;
		$(".dizhi").text("姓名：" + dizhiku[n].name + "地址：" + dizhiku[n].dizhi + "电话：" + dizhiku[n].dianhu);
		var sum = 0;
		var shuliang = 0;
		for (var i = 0; i < cangku.length; i++) {

			if (cangku[i].shuxing == "true") {
				sum += cangku[i].shuliang * cangku[i].jiage;
				shuliang += cangku[i].shuliang;
			}
		}
		//创建订单
		var dingdanhao = parseInt(Math.random() * 1000000);
		console.log(dingdanhao, sum, shuliang, dizhiku[0].dizhi, dizhiku[0].dianhu);
		var dingdan = {
			id: dingdanhao,
			zongjia: sum,
			shuliang: "<img src='../img/redmi_3.png'>",
			dizhi: dizhiku[0].dizhi,
			dianhua: dizhiku[0].dianhu
		}
		console.log(dingdan);
		if (dingdanku !== null) {
			var n = dingdanku.length;
			dingdanku[n] = dingdan;
		} else {
			dingdanku = [dingdan];
		}
		console.log(dingdanku);
		var str = JSON.stringify(dingdanku);
		localStorage.setItem("dingdanku", str);
	}
	// function gouwu(shangpin) {
	// 	var get = localStorage.getItem("cangku");
	// 	var cangku = JSON.parse(get);
	// 	if (JSON.stringify(cangku).indexOf(JSON.stringify(shangpin)) == -1) {
	// 		if (cangku == null) {
	// 			cangku = [shangpin];
	// 		} else {
	// 			var n = cangku.length;
	// 			cangku[n] = shangpin;
	// 		}
	// 		var str = JSON.stringify(cangku);
	// 		localStorage.setItem("cangku", str);
	// 		return localStorage.setItem("cangku", str);
	// 	}
	// };

	localStorage.removeItem("cangku");
	console.log(dizhiku);
	//退出登录
	$(".tuichu").click(function() {
		localStorage.removeItem("dizhiku");
		localStorage.removeItem("cangku");
		localStorage.removeItem("like");
		localStorage.removeItem("dingdanku");
		localStorage.removeItem("username");
		history.go(0);
	});

});
