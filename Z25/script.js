function flower() {
	if (document.getElementById("flower").style.opacity == 0) {
		document.getElementById("flower").style.opacity = 1;
	} else if (document.getElementById("flower").style.opacity == 1) {
		document.getElementById("flower").style.opacity = 0;
	}
}
function green() {
	document.getElementById("triangle").style.borderBottom = "150px solid green";
}
function blue() {
	document.getElementById("triangle").style.borderBottom = "150px solid blue";
}
function red() {
	document.getElementById("triangle").style.borderBottom = "150px solid red";
}
function yellow() {
	document.getElementById("triangle").style.borderBottom = "150px solid yellow";
}
