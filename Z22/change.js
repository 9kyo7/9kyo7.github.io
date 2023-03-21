document.getElementById("myButton").onclick = function () {
	var title = document.getElementById("text-top");
	var mainbgc = document.getElementById("main");
	var switchbtn = document.getElementById("myButton");

	if (title.classList == "title-female") {
		title.classList.add("title-male");
		title.classList.remove("title-female");
		mainbgc.classList.add("main-bgc-male");
		mainbgc.classList.remove("main-bgc-female");
		switchbtn.classList.add("switch-btn-male");
		switchbtn.classList.remove("switch-btn-female");
		document.getElementById("text-top").innerHTML = "Dzień Mężczyzn<b/>";
		document.getElementById("text").innerHTML =
			"W tym wyjątkowym dniu przyjmij ode mnie najserdeczniejsze życzenia: byś nigdy nie wątpił w piękno życia i zawsze wierzył we własne możliwości. Z okazji Dnia Mężczyzny życzę Ci śmiałości w dążeniu do własnych celów, odwagi w kroczeniu swoją drogą i wytrwałości w każdym działaniu. <b/>";
	} else {
		title.classList.add("title-female");
		title.classList.remove("title-male");
		mainbgc.classList.add("main-bgc-female");
		mainbgc.classList.remove("main-bgc-male");
		switchbtn.classList.add("switch-btn-female");
		switchbtn.classList.remove("switch-btn-male");
		document.getElementById("text-top").innerHTML = "Dzień Kobiet<b/>";
		document.getElementById("text").innerHTML =
			"Dużo szczęścia, pomyślności, mało smutku, moc radości. Byś miłości w życiu miała w bród, boś Ty jest kobieta cud! Kwiatów nie dam, mimo szczerych chęci, lecz słowa, które zostaną w pamięci. Życzę szczęścia, dużo radości i długiej szczęśliwej przyszłości. <b/>";
	}

	var body = document.getElementById("body");

	if (body.classList == "bgc-clr-female") {
		body.classList.add("bgc-clr-male");
		body.classList.remove("bgc-clr-female");
	} else {
		body.classList.add("bgc-clr-female");
		body.classList.remove("bgc-clr-male");
	}
};
