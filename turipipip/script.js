window.onclick = function () {
    document.getElementById("myaudio").play();
    document.getElementById("main").style.backgroundImage = "url(cover3.jpg)";
    document.getElementById("button").style.opacity = "0";
    fetch("https://api.ipify.org?format=json")
	.then((response) => response.json())
	.then((data) => {
		document.getElementById("ip").innerHTML = data.ip;
	})
	.catch((error) => {
		console.log("Error:", error);
	});
    
    document.getElementById("ip").style.transform = "rotate3d(3, 3, 3, 360deg) ";
};

