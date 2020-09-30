
var numbersList = [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
var filledPosition = [];

function isWin() {
	if (document.getElementById("1").innerHTML == "1" && 
	document.getElementById("2").innerHTML == "2" && 
	document.getElementById("3").innerHTML == "3" && 
	document.getElementById("4").innerHTML == "4" && 
	document.getElementById("5").innerHTML == "5" && 
	document.getElementById("6").innerHTML == "6" && 
	document.getElementById("7").innerHTML == "7" && 
	document.getElementById("8").innerHTML == "8" && 
	document.getElementById("9").innerHTML == "9" && 
	document.getElementById("10").innerHTML == "10" && 
	document.getElementById("11").innerHTML == "11" && 
	document.getElementById("12").innerHTML == "12" && 
	document.getElementById("13").innerHTML == "13" && 
	document.getElementById("14").innerHTML == "14" && 
	document.getElementById("15").innerHTML == "15") {
		let i = 0;
		while (i < 16) {
			document.getElementById((i + 1).toString()).innerHTML = (i + 1).toString();
			i++;
		}
		console.log("hehe");
	}
}

const generate = (item) => {
	let generatedPosition = Math.floor(Math.random() * 100)	 % 16;
	if (filledPosition.includes(generatedPosition) == false)
		return filledPosition.push(generatedPosition);
		
	generate(item);
}

const shuffle = () => {
	numbersList.forEach(generate);
	let i = 0;
	
	while (i < 16) {
		document.getElementById(filledPosition[i] + 1).innerHTML = numbersList[i];
		i++;
	}
	document.getElementsByClassName("text").visibility = false;
	filledPosition = [];
}

const easy = () => {
	let i = 0;
	while (i < 12) {
		document.getElementById((i + 1).toString()).innerHTML = (i + 1).toString();
		i++;
	}
	
	let j = 13;
	while (j < 16) {
		document.getElementById((j + 1).toString()).innerHTML = (j).toString();
		j++;
	}
	
	document.getElementById("13").innerHTML = " ";
}

const complete = () => {
	let i = 0;
	while (i < 16) {
		document.getElementById((i + 1).toString()).innerHTML = (i + 1).toString();
		i++;
	}
	isWin();
}

function placeNumberOne() {
	// 5, 2
	let content = document.getElementById("1").innerHTML;
	if (document.getElementById("5").innerHTML == " ") {
		document.getElementById("5").innerHTML = content;
		document.getElementById("1").innerHTML = " ";
	}
	else if (document.getElementById("2").innerHTML == " ") {
		document.getElementById("2").innerHTML = content;
		document.getElementById("1").innerHTML = " ";
	}
	else if (document.getElementById("5").innerHTML != " " && document.getElementById("2").innerHTML != " ") {
		document.getElementById("1").innerHTML = content;
	}
	isWin();
}

function placeNumberTwo() {
	// 1, 6, 3
	let content = document.getElementById("2").innerHTML;
	if (document.getElementById("1").innerHTML == " ") {
		document.getElementById("1").innerHTML = content;
		document.getElementById("2").innerHTML = " ";
	}
	else if (document.getElementById("6").innerHTML == " ") {
		document.getElementById("6").innerHTML = content;
		document.getElementById("2").innerHTML = " ";
	}
	else if (document.getElementById("3").innerHTML == " ") {
		document.getElementById("3").innerHTML = content;
		document.getElementById("2").innerHTML = " ";
	}
	else if (document.getElementById("1").innerHTML != " " && document.getElementById("6").innerHTML != " " && document.getElementById("3").innerHTML != " "){
		document.getElementById("2").innerHTML = content;
	}
	isWin();
}

function placeNumberThree() {
	// 2, 7, 4
	let content = document.getElementById("3").innerHTML;
	if (document.getElementById("2").innerHTML == " ") {
		document.getElementById("2").innerHTML = content;
		document.getElementById("3").innerHTML = " ";
	}
	else if (document.getElementById("7").innerHTML == " ") {
		document.getElementById("7").innerHTML = content;
		document.getElementById("3").innerHTML = " ";
	}
	else if (document.getElementById("4").innerHTML == " ") {
		document.getElementById("4").innerHTML = content;
		document.getElementById("3").innerHTML = " ";
	}
	else if (document.getElementById("2").innerHTML != " " && document.getElementById("7").innerHTML != " " && document.getElementById("4").innerHTML != " ") {
		document.getElementById("3").innerHTML = content;
	}
	isWin();
}

function placeNumberFour() {
	// 3, 8
	let content = document.getElementById("4").innerHTML;
	if (document.getElementById("3").innerHTML == " ") {
		document.getElementById("3").innerHTML = content;
		document.getElementById("4").innerHTML = " ";
	}
	else  if (document.getElementById("8").innerHTML == " ") {
		document.getElementById("8").innerHTML = content
		document.getElementById("4").innerHTML = " ";
	}
	else if (document.getElementById("3").innerHTML != " " && document.getElementById("8").innerHTML != " ") {
		document.getElementById("4").innerHTML = content;
	}
	isWin();
}

function placeNumberFive() {
	// 1, 6, 9
	let content = document.getElementById("5").innerHTML;
	if (document.getElementById("1").innerHTML == " ") {
		document.getElementById("1").innerHTML = content;
		document.getElementById("5").innerHTML = " ";
	}
	else if (document.getElementById("6").innerHTML == " ") {
		document.getElementById("6").innerHTML = content;
		document.getElementById("5").innerHTML = " ";
	}
	else if (document.getElementById("9").innerHTML == " ") {
		document.getElementById("9").innerHTML = content;
		document.getElementById("5").innerHTML = " ";
	}
	else if (document.getElementById("1").innerHTML != " " && document.getElementById("6").innerHTML != " " && document.getElementById("9").innerHTML != " ") {
		document.getElementById("5").innerHTML = content;
	}
	isWin();
}

function placeNumberSix() {
	// 2, 5, 10, 7
	let content = document.getElementById("6").innerHTML;
	if (document.getElementById("2").innerHTML == " ") {
		document.getElementById("2").innerHTML = content;
		document.getElementById("6").innerHTML = " ";
	}
	else if (document.getElementById("5").innerHTML == " ") {
		document.getElementById("5").innerHTML = content;
		document.getElementById("6").innerHTML = " ";
	}
	else if (document.getElementById("10").innerHTML == " ") {
		document.getElementById("10").innerHTML = content;
		document.getElementById("6").innerHTML = " ";
	}
	else if (document.getElementById("7").innerHTML == " ") {
		document.getElementById("7").innerHTML = content;
		document.getElementById("6").innerHTML = " ";
	}
	else if (document.getElementById("2").innerHTML != " " && document.getElementById("5").innerHTML != " " && document.getElementById("10").innerHTML != " " && document.getElementById("7").innerHTML != " ") {
		document.getElementById("6").innerHTML = content;
	}
	isWin();
}

function placeNumberSeven() {
	// 3, 6, 11, 8
	let content = document.getElementById("7").innerHTML;
	if (document.getElementById("3").innerHTML == " ") {
		document.getElementById("3").innerHTML = content;
		document.getElementById("7").innerHTML = " ";
	}
	else if (document.getElementById("6").innerHTML == " ") {
		document.getElementById("6").innerHTML = content;
		document.getElementById("7").innerHTML = " ";
	}
	else if (document.getElementById("11").innerHTML == " ") {
		document.getElementById("11").innerHTML = content;
		document.getElementById("7").innerHTML = " ";
	}
	else if (document.getElementById("8").innerHTML == " ") {
		document.getElementById("8").innerHTML = content;
		document.getElementById("7").innerHTML = " ";
	}
	else if (document.getElementById("3").innerHTML != " " && document.getElementById("6").innerHTML != " " && document.getElementById("11").innerHTML != " " && document.getElementById("8").innerHTML != " ") {
		document.getElementById("7").innerHTML = content;
	}
	isWin();
}

function placeNumberEight() {
	// 4, 7, 12
	let content = document.getElementById("8").innerHTML;
	if (document.getElementById("4").innerHTML == " ") {
		document.getElementById("4").innerHTML = content;
		document.getElementById("8").innerHTML = " ";
	}
	else if (document.getElementById("7").innerHTML == " ") {
		document.getElementById("7").innerHTML = content;
		document.getElementById("8").innerHTML = " ";
	}
	else if (document.getElementById("12").innerHTML == " ") {
		document.getElementById("12").innerHTML = content;
		document.getElementById("8").innerHTML = " ";
	}
	else if (document.getElementById("4").innerHTML != " " && document.getElementById("7").innerHTML != " " && document.getElementById("12").innerHTML != " ") {
		document.getElementById("8").innerHTML = content;
	}
	isWin();
}

function placeNumberNine() {
	// 5, 13, 10
	let content = document.getElementById("9").innerHTML;
	if (document.getElementById("5").innerHTML == " ") {
		document.getElementById("5").innerHTML = content;
		document.getElementById("9").innerHTML = " ";
	}
	else if (document.getElementById("13").innerHTML == " ") {
		document.getElementById("13").innerHTML = content;
		document.getElementById("9").innerHTML = " ";
	}
	else if (document.getElementById("10").innerHTML == " ") {
		document.getElementById("10").innerHTML = content;
		document.getElementById("9").innerHTML = " ";
	}
	else if (document.getElementById("5").innerHTML != " " && document.getElementById("13").innerHTML != " " && document.getElementById("10").innerHTML != " ") {
		document.getElementById("9").innerHTML = content;
	}
	isWin();
}

function placeNumberTen() {
	// 9, 6, 14, 11
	let content = document.getElementById("10").innerHTML;
	if (document.getElementById("9").innerHTML == " ") {
		document.getElementById("9").innerHTML = content;
		document.getElementById("10").innerHTML = " ";
	}
	else if (document.getElementById("6").innerHTML == " ") {
		document.getElementById("6").innerHTML = content;
		document.getElementById("10").innerHTML = " ";
	}
	else if (document.getElementById("14").innerHTML == " ") {
		document.getElementById("14").innerHTML = content;
		document.getElementById("10").innerHTML = " ";
	}
	else if (document.getElementById("11").innerHTML == " ") {
		document.getElementById("11").innerHTML = content;
		document.getElementById("10").innerHTML = " ";
	}
	else if (document.getElementById("9").innerHTML != " " && document.getElementById("6").innerHTML != " " && document.getElementById("14").innerHTML != " " && document.getElementById("11").innerHTML != " ") {
		document.getElementById("10").innerHTML = content;
	}
	isWin();
}

function placeNumberEleven() {
	// 10, 7, 15, 12
	let content = document.getElementById("11").innerHTML;
	if (document.getElementById("10").innerHTML == " ") {
		document.getElementById("10").innerHTML = content;
		document.getElementById("11").innerHTML = " ";
	}
	else if (document.getElementById("7").innerHTML == " ") {
		document.getElementById("7").innerHTML = content;
		document.getElementById("11").innerHTML = " ";
	}
	else if (document.getElementById("15").innerHTML == " ") {
		document.getElementById("15").innerHTML = content;
		document.getElementById("11").innerHTML = " ";
	}
	else if (document.getElementById("12").innerHTML == " ") {
		document.getElementById("12").innerHTML = content;
		document.getElementById("11").innerHTML = " ";
	}
	else if (document.getElementById("10").innerHTML != " " && document.getElementById("7").innerHTML != " " && document.getElementById("15").innerHTML != " " && document.getElementById("12").innerHTML != " ") {
		document.getElementById("11").innerHTML = content;
	}
	isWin();
}

function placeNumberTwelve() {
	// 11, 8, 16
	let content = document.getElementById("12").innerHTML;
	if (document.getElementById("11").innerHTML == " ") {
		document.getElementById("11").innerHTML = content;
		document.getElementById("12").innerHTML = " ";
	}
	else if (document.getElementById("8").innerHTML == " ") {
		document.getElementById("8").innerHTML = content;
		document.getElementById("12").innerHTML = " ";
	}
	else if (document.getElementById("16").innerHTML == " ") {
		document.getElementById("16").innerHTML = content;
		document.getElementById("12").innerHTML = " ";
	}
	else if (document.getElementById("11").innerHTML != " " && document.getElementById("8").innerHTML != " " && document.getElementById("16").innerHTML != " ") {
		document.getElementById("12").innerHTML = content;
	}
	isWin();
}

function placeNumberThirteen() {
	// 9, 14
	let content = document.getElementById("13").innerHTML;
	if (document.getElementById("9").innerHTML == " ") {
		document.getElementById("9").innerHTML = content;
		document.getElementById("13").innerHTML = " ";
	}
	else if (document.getElementById("14").innerHTML == " ") {
		document.getElementById("14").innerHTML = content;
		document.getElementById("13").innerHTML = " ";
	}
	else if (document.getElementById("9").innerHTML != " " && document.getElementById("14").innerHTML != " ") {
		document.getElementById("13").innerHTML = content;
	}
	isWin();
}

function placeNumberFourteen() {
	// 13, 10, 15
	let content = document.getElementById("14").innerHTML;
	if (document.getElementById("13").innerHTML == " ") {
		document.getElementById("13").innerHTML = content;
		document.getElementById("14").innerHTML = " ";
	}
	else if (document.getElementById("10").innerHTML == " ") {
		document.getElementById("10").innerHTML = content;
		document.getElementById("14").innerHTML = " ";
	}
	else if (document.getElementById("15").innerHTML == " ") {
		document.getElementById("15").innerHTML = content;
		document.getElementById("14").innerHTML = " ";
	}
	else if (document.getElementById("13").innerHTML != " " && document.getElementById("10").innerHTML != " " && document.getElementById("15").innerHTML != " ") {
		document.getElementById("14").innerHTML = content;
	}
	isWin();
}

function placeNumberFifteen() {
	// 14, 11, 16
	let content = document.getElementById("15").innerHTML;
	if (document.getElementById("14").innerHTML == " ") {
		document.getElementById("14").innerHTML = content;
		document.getElementById("15").innerHTML = " ";
	}
	else if (document.getElementById("11").innerHTML == " ") {
		document.getElementById("11").innerHTML = content;
		document.getElementById("15").innerHTML = " ";
	}
	else if (document.getElementById("16").innerHTML == " ") {
		document.getElementById("16").innerHTML = content;
		document.getElementById("15").innerHTML = " ";
	}
	else if (document.getElementById("14").innerHTML != " " && document.getElementById("11").innerHTML != " " && document.getElementById("16").innerHTML != " ") {
		document.getElementById("15").innerHTML = content;
	}
	isWin();
}

function placeNumberSixteen() {
	// 15, 12
	let content = document.getElementById("16").innerHTML;
	if (document.getElementById("15").innerHTML == " ") {
		document.getElementById("15").innerHTML = content;
		document.getElementById("16").innerHTML = " ";
	}
	else if (document.getElementById("12").innerHTML == " ") {
		document.getElementById("12").innerHTML = content;
		document.getElementById("16").innerHTML = " ";
	}
	else if (document.getElementById("15").innerHTML != " " && document.getElementById("12").innerHTML != " ") {
		document.getElementById("16").innerHTML = content;
	}
	isWin();
}


