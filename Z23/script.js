monthNumber = new Date().getMonth();
dayNumber = new Date().getDate();
dayName = new Date().getDay();
yearNumber = new Date().getFullYear();

const monthNames = [
	"Styczeń",
	"Luty",
	"Marzec",
	"Kwiecień",
	"Maj",
	"Czerwiec",
	"Lipiec",
	"Sierpień",
	"Wrzesień",
	"Październik",
	"Listopad",
	"Grudzień",
];
var m1name = monthNames[monthNumber - 1];
var m2name = monthNames[monthNumber];
var m3name = monthNames[monthNumber + 1];
var m1 = (document.getElementById("monthName-1").innerHTML = m1name);
var m2 = (document.getElementById("monthName-2").innerHTML = m2name);
var m3 = (document.getElementById("monthName-3").innerHTML = m3name);

function gencallendar1(month, year) {
	const tabela1 = document.getElementById("callendar-table-1");
	const dayNames = ["Pn", "Wt", "Śr", "Czw", "Pt", "Sb", "Nd"];

	const firstDay = new Date(year, month - 1, 1);
	const lastDay = new Date(year, month, 0);
	const daysInAMonth = lastDay.getDate();
	const weekDayFirstMonth = firstDay.getDay();

	let dni = 1;

	for (let i = 0; i < 6; i++) {
		const wiersz = document.createElement("tr");
		for (let j = 0; j < 7; j++) {
			const komorka = document.createElement("td");
			if (i === 0 && j < weekDayFirstMonth) {
				komorka.textContent = "";
			} else if (dni <= daysInAMonth) {
				komorka.textContent = dni;
				dni++;
			}
			wiersz.appendChild(komorka);
		}
		tabela1.appendChild(wiersz);
		if (dni > daysInAMonth) {
			break;
		}
	}
}
function gencallendar2(month, year) {
	const tabela1 = document.getElementById("callendar-table-2");
	const dayNames = ["Pn", "Wt", "Śr", "Czw", "Pt", "Sb", "Nd"];

	const firstDay = new Date(year, month, 1);
	const lastDay = new Date(year, month, -1);
	const daysInAMonth = lastDay.getDate();
	const weekDayFirstMonth = firstDay.getDay();

	let dni = 1;

	for (let i = 0; i < 6; i++) {
		const wiersz = document.createElement("tr");
		for (let j = 0; j < 7; j++) {
			const komorka = document.createElement("td");
			if (i === 0 && j < weekDayFirstMonth) {
				komorka.textContent = "";
			} else if (dni <= daysInAMonth) {
				komorka.textContent = dni;
				dni++;
			}
			if (dni - 1 == dayNumber) {
				komorka.style.backgroundColor = "red";
			}
			wiersz.appendChild(komorka);
		}
		tabela1.appendChild(wiersz);
		if (dni > daysInAMonth) {
			break;
		}
	}
}
function gencallendar3(month, year) {
	const tabela1 = document.getElementById("callendar-table-3");
	const dayNames = ["Pn", "Wt", "Śr", "Czw", "Pt", "Sb", "Nd"];

	const firstDay = new Date(year, month + 1, 1);
	const lastDay = new Date(year, month, 0);
	const daysInAMonth = lastDay.getDate();
	const weekDayFirstMonth = firstDay.getDay();

	let dni = 1;

	for (let i = 0; i < 6; i++) {
		const wiersz = document.createElement("tr");
		for (let j = 0; j < 7; j++) {
			const komorka = document.createElement("td");
			if (i === 0 && j < weekDayFirstMonth) {
				komorka.textContent = "";
			} else if (dni <= daysInAMonth) {
				komorka.textContent = dni;
				dni++;
			}
			wiersz.appendChild(komorka);
		}
		tabela1.appendChild(wiersz);
		if (dni > daysInAMonth) {
			break;
		}
	}
}

gencallendar1(monthNumber, yearNumber);
gencallendar2(monthNumber, yearNumber);
gencallendar3(monthNumber, yearNumber);
