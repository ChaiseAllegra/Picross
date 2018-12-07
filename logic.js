// logic.js
// game logic for picross game

var hitArr = [];
var hitArr2 = [];

var squareCount7 = 0;
var hitCount7 = 0;

var squareCount13 = 0;
var hitCount13 = 0;

var row;
var length;

var boolArr7 = [];
var boolArr13 = [];
var hitArrLvL1 = [];
var hitArrLvL1a = [];
var hitArrLvL2a = [];
var hitArrLvL2b = [];
var hitArrLvL3a = [];
var hitArrLvL3b = [];
var isLevel7;

/* ------------- Variables for displaying --------------- */
var rowTip = [];
var colTip = [];

var it;//holds json info
var sec;
var min;
var hour;
var numTurns;
var numElem;
var endTime;
var doAttack;
var doArcade;
var timeLevelPassed = [];
var arcadeLevelPassed = [];
var active13;
var active7;


function setTime() {
	sec = 0;
	min = 0;
	hour = 0;
	numTurns = 0;
	numElem = 0;
	doAttack = false;
	doArcade = false;
	timeLevelPassed[0] = false;
	timeLevelPassed[1] = false;
	timeLevelPassed[2] = false;
	arcadeLevelPassed[0] = false;
	arcadeLevelPassed[1] = false;
	arcadeLevelPassed[2] = false;
	active13=false;
	active7=true;
}
function arcade() {
	numElem = 0;
	numTurns = 0;
	doArcade = true;
	doAttack=false;
	if(timeLevelPassed[0]==false&&timeLevelPassed[1]==false&&timeLevelPassed[2]==false&&active7)
		loadLevel1();
	if(timeLevelPassed[0]==false&&timeLevelPassed[1]==false&&timeLevelPassed[2]==false&&active13)
		loadLevel4();
	createLevel();
}
function attack() {
	numElem = 0;
	numTurns = 0;
	doAttack = true;
	doArcade=false;
	endTime = min + 1;
	if(timeLevelPassed[0]==false&&timeLevelPassed[1]==false&&timeLevelPassed[2]==false&&active7)
		loadLevel1();
	if(timeLevelPassed[0]==false&&timeLevelPassed[1]==false&&timeLevelPassed[2]==false&&active13)
		loadLevel4();
	createLevel();
	//need to add timeLevelPassed[1]=true; to the win condition
}

function createLevel() {
	/* -------------------- For 7x7 tables -------------------------*/
	numTurns = 0;
	document.getElementById("turns").innerHTML = numTurns;
	var tbl = document.getElementById("table");
	var i=0;
	console.log(it[0]["one"]);
	while(i<7)
	{
		hitArr.push([]);
		hitArr[i][0]=it[i]['one'];
		hitArr[i][1]=it[i]['two'];
		hitArr[i][2]=it[i]['three'];
		hitArr[i][3]=it[i]['four'];
		hitArr[i][4]=it[i]['five'];
		hitArr[i][5]=it[i]['six'];
		hitArr[i][6]=it[i]['seven'];
		i++;
	}
	
	for (var i = 0; i < tbl.rows.length - 1; i++) {
		boolArr7.push([]);
		rowTip.push([]);
		colTip.push([]);
		for (var j = 0; j < tbl.rows[i].cells.length - 1; j++) {
			boolArr7[i][j] = 0;
			rowTip[i][j] = 0;
			colTip[i][j] = 0;
			if (hitArr[i][j]==1)//left side of X
			{
				numElem++;
				squareCount7++;
			}
		}
	}


	document.getElementById("elements").innerHTML = numElem;
	/* -------------------- For 13x13 tables -------------------------*/
	var tbl2 = document.getElementById("table2");
	i=0;
	while(i<13)
	{
		hitArr2.push([]);
		hitArr2[i][0]=it[i]['one'];
		hitArr2[i][1]=it[i]['two'];
		hitArr2[i][2]=it[i]['three'];
		hitArr2[i][3]=it[i]['four'];
		hitArr2[i][4]=it[i]['five'];
		hitArr2[i][5]=it[i]['six'];
		hitArr2[i][6]=it[i]['seven'];
		hitArr2[i][7]=it[i]['eight'];
		hitArr2[i][8]=it[i]['nine'];
		hitArr2[i][9]=it[i]['ten'];
		hitArr2[i][10]=it[i]['eleven'];
		hitArr2[i][11]=it[i]['twelve'];
		hitArr2[i][12]=it[i]['thirteen'];
		i++;
	}
	
	for (var i = 0; i < tbl2.rows.length - 1; i++) {
		boolArr13.push([]);
		rowTip.push([]);
		colTip.push([]);
		for (var j = 0; j < tbl2.rows[i].cells.length - 1; j++) {
			boolArr13[i][j] = 0;
			rowTip[i][j] = 0;
			colTip[i][j] = 0;
			if (hitArr2[i][j]==1)//left side of X
			{
				numElem++;
				squareCount13++;
			}
		}
	}
	document.getElementById("elements").innerHTML = numElem;
}
function loadLevel1() {
	$.ajax({
		type: 'GET',
		url: 'http://localhost/picross/levelLoad.php',
		//data: {action: "yeet"},    
		success: function(data){
			//console.log(data);
			it=JSON.parse(data);
		}
	});
}
function loadLevel2() {
$.ajax({
	type: 'GET',
	url: 'http://localhost/picross/levelLoad2.php',
	//data: {action: "yeet"},    
	success: function(data){
		//console.log(data);
		it=JSON.parse(data);
		console.log(it);
	}
});
}
function loadLevel3() {
$.ajax({
	type: 'GET',
	url: 'http://localhost/picross/levelLoad3.php',
	//data: {action: "yeet"},    
	success: function(data){
		//console.log(data);
		it=JSON.parse(data);
	}
});
}



function loadLevel4() {
	$.ajax({
		type: 'GET',
		url: 'http://localhost/picross/levelLoad4.php',
		//data: {action: "yeet"},    
		success: function(data){
			//console.log(data);
			it=JSON.parse(data);
		}
	});
}
function loadLevel5() {
$.ajax({
	type: 'GET',
	url: 'http://localhost/picross/levelLoad5.php',
	//data: {action: "yeet"},    
	success: function(data){
		//console.log(data);
		it=JSON.parse(data);
	}
});
}
function loadLevel6() {
$.ajax({
	type: 'GET',
	url: 'http://localhost/picross/levelLoad6.php',
	//data: {action: "yeet"},    
	success: function(data){
		//console.log(data);
		it=JSON.parse(data);
	}
});
}
function displayTips() {
	tbl = document.getElementById("table");
	for (var i = 0; i < rowTip.length; i++) {
		for (var j = 0; j < rowTip.length; j++) {
			if (rowTip[i][j] > 0) {
				var elemID = "" + "t" + i;
				var element = document.getElementById(elemID);
				var insElement = " " + rowTip[i][j];
				element.insertAdjacentHTML('beforeend', insElement);
			}
		}
	}

	for (var i = 0; i < colTip.length; i++) {
		for (var j = 0; j < colTip.length; j++) {
			if (colTip[i][j] > 0) {
				var elemID = "" + "r" + (i + 1);
				var element = document.getElementById(elemID);
				var insElement = " " + colTip[i][j] + "<br>";
				element.insertAdjacentHTML('beforeend', insElement);
			}
		}
	}
}

function update() {
	var x = setInterval(function () {
		var i = 0;

		if (doAttack&&active7) {

			if (timeLevelPassed[0] && timeLevelPassed[1] == false && timeLevelPassed[2] == false){
					loadLevel2();
					createLevel();
			}
			

			if (timeLevelPassed[0] && timeLevelPassed[1] && timeLevelPassed[2] == false)
			{
				loadLevel3();
				createLevel();
			}
				
			if (timeLevelPassed[0] && timeLevelPassed[1] && timeLevelPassed[2])
				doAttack = false;
		}
		if (doAttack&&active13) {

			if (timeLevelPassed[0] && timeLevelPassed[1] == false && timeLevelPassed[2] == false){
					loadLevel4();
					createLevel();
			}
			

			if (timeLevelPassed[0] && timeLevelPassed[1] && timeLevelPassed[2] == false)
			{
				loadLevel5();
				createLevel();
			}
				
			if (timeLevelPassed[0] && timeLevelPassed[1] && timeLevelPassed[2])
				doAttack = false;
		}

		if (doArcade&&active7) {
			if (arcadeLevelPassed[0] && arcadeLevelPassed[1] == false && arcadeLevelPassed[2] == false)
			{
					loadLevel2();
					createLevel();
			}
			if (arcadeLevelPassed[0] && arcadeLevelPassed[1] && arcadeLevelPassed[2] == false)
				{
					loadlevel3();
					createLevel();
				}
			if (arcadeLevelPassed[0] && arcadeLevelPassed[1] && arcadeLevelPassed[2])
				doArcade = false;
		}

		if (doArcade&&active13) {
			if (arcadeLevelPassed[0] && arcadeLevelPassed[1] == false && arcadeLevelPassed[2] == false)
				{
					loadlevel5();
					createLevel();
				}
			if (arcadeLevelPassed[0] && arcadeLevelPassed[1] && arcadeLevelPassed[2] == false)
			{
				loadlevel6();
				createLevel();
			}
			if (arcadeLevelPassed[0] && arcadeLevelPassed[1] && arcadeLevelPassed[2])
				doArcade = false;
		}
	}, 1000);
}
function createTable(rowSize, colSize) {
	row = rowSize;
	length = colSize;
	var body = document.getElementById("innerBody");
	var tbl = document.getElementById("table");

	for (var i = 0; i < rowSize; i++) {
		var tr = tbl.insertRow();
		for (var j = 0; j < colSize; j++) {
			if (i == rowSize && j == colSize)
				break;
			else {
				var td = tr.insertCell();
				td.appendChild(document.createTextNode(""));
				td.style.border = '1px solid black';
				var a = i + 1;
				var b = j + 1;
				td.id = "" + a + " " + b;
			}
		}
	}
	body.appendChild(tbl);
}

function deleteTable() {
	document.getElementsByTagName("table")[0];
	var x = document.getElementsByClassName("content");
	for (var i = 0; i < x.length; i++) {
		var item = x[i];
		item.style.backgroundColor = "rgba(170, 170, 170, 0.4)";
		item.innerHTML = "";
	}
}


function cellClick() {
	/* -------------------For 7x7 tables ------------------------*/
	var tbl = document.getElementById("table");
	if (tbl != null) {
		for (var i = 0; i < tbl.rows.length; i++)
			for (var j = 0; j < tbl.rows[i].cells.length; j++)
				tbl.rows[i].cells[j].onclick = function () { checkAns(this); };
	}

	/* -------------------For 13x13 tables ------------------------*/
	var tbl2 = document.getElementById("table2");
	if (tbl2 != null) {
		for (var i = 0; i < tbl2.rows.length; i++)
			for (var j = 0; j < tbl2.rows[i].cells.length; j++)
				tbl2.rows[i].cells[j].onclick = function () { checkAns(this); };
	}
}

function checkAns(cel) {
	/* -------------------- For 7x7 tables -------------------------*/
	if (cel.parentNode.parentNode.parentNode.id == "table") {
		var num = cel.id.split('');
		var splitted = num.map(Number);
		if (hitArr[splitted[0]][splitted[1]] == "1") {
			cel.style.backgroundColor = "rgb(33, 204, 138)";
			//cel.style.boxShadow = "0 0 5px 2px rgb(0, 187, 140) inset";
			if (boolArr7[splitted[0]][splitted[1]] != 1) {
				boolArr7[splitted[0]][splitted[1]] = 1;
				hitCount7++;
				numElem--;
				document.getElementById("elements").innerHTML = numElem;

				/* ----------------Displaying the number of turns ---------------*/
				numTurns++;
				document.getElementById("turns").innerText = numTurns;
				/* --------------------------------------------------------------*/
			}
		}
		else {
			cel.innerHTML = "<div class = 'backG'>X</div>";
			cel.style.backgroundColor = "rgba(255, 255, 255, 0.65)";
			//cel.style.boxShadow = "0 0 5px 2px rgba(170, 170, 170, 0.4) inset";
			if (boolArr7[splitted[0]][splitted[1]] != 2) {
				boolArr7[splitted[0]][splitted[1]] = 2;
				/* ----------------Displaying the number of turns ---------------*/
				numTurns++;
				document.getElementById("turns").innerText = numTurns;
				/* --------------------------------------------------------------*/
			}
		}
	}
	/* -------------------- For 13x13 tables -------------------------*/
	if (cel.parentNode.parentNode.parentNode.id == "table2") {
		var num2 = cel.id.split(" ", 2);
		var splitted2 = num2.map(Number);
		if (hitArr2[splitted2[0]][splitted2[1]] == "1") {
			cel.style.backgroundColor = "rgb(0, 235, 176)";
			//cel.style.boxShadow = "0 0 5px 2px rgb(0, 187, 140) inset";
			hitCount13++;
		}
		else {
			cel.innerHTML = "<div class = 'backG2'>X</div>";
			cel.style.backgroundColor = "rgba(255, 255, 255, 0.65)";
			//cel.style.boxShadow = "0 0 5px 2px rgba(170, 170, 170, 0.4) inset";
		}
	}
	checkVictory();
}

function checkVictory() {
	if (squareCount7 == hitCount7) {
		if (doAttack) {

			if (timeLevelPassed[0] == false && timeLevelPassed[1] == false && timeLevelPassed[2] == false) {
				timeLevelPassed[0] = true;
				console.log("level 1 passed");
				hitCount7 = 0;
				return;
			}
			if (timeLevelPassed[0] && timeLevelPassed[1] == false && timeLevelPassed[2] == false) {
				timeLevelPassed[1] = true;
				console.log("level 2 passed");
				hitCount7 = 0;
				return;
			}
			if (timeLevelPassed[0] && timeLevelPassed[1] && timeLevelPassed[2] == false) {
				console.log("level 3 passed");
				timeLevelPassed[2] = true;
				hitCount7 = 0;
				return;
			}
		}
		if (doArcade) {
			if (arcadeLevelPassed[0] == false && arcadeLevelPassed[1] == false && arcadeLevelPassed[2] == false) {
				arcadeLevelPassed[0] = true;
				hitCount7 = 0;
				return;
			}
			if (arcadeLevelPassed[0] && arcadeLevelPassed[1] == false && arcadeLevelPassed[2] == false) {
				arcadeLevelPassed[1] = true;
				hitCount7 = 0;
				return;
			}
			if (arcadeLevelPassed[0] && arcadeLevelPassed[1] && arcadeLevelPassed[2] == false) {
				arcadeLevelPassed[2] = true;
				hitCount7 = 0;
				return;
			}
		}
		alert("You Won! "+" Completion time: "+hour + " hours " + min + " minutes " + sec + " seconds");


	}
}

function initTableAnsw() {
	deleteTable();
	/* -------------------- For 7x7 tables -------------------------*/
	numElem = 0;
	numTurns = 0;
	document.getElementById("turns").innerHTML = numTurns;
	var tbl = document.getElementById("table");
	for (var i = 0; i < tbl.rows.length - 1; i++) {
		hitArr.push([]);
		boolArr7.push([]);
		rowTip.push([]);
		colTip.push([]);
		for (var j = 0; j < tbl.rows[i].cells.length - 1; j++) {
			var ran = Math.round(Math.random());
			hitArr[i][j] = ran;
			boolArr7[i][j] = 0;
			rowTip[i][j] = 0;
			colTip[i][j] = 0;
			if (ran == 1) {
				numElem++;
				document.getElementById("elements").innerHTML = numElem;
			}
		}
	}
	for (var i = 0; i < tbl.rows.length - 1; i++) {
		for (var j = 0; j < tbl.rows[i].cells.length - 1; j++) {
			if (hitArr[i][j] == "1") {
				squareCount7++;
				//tbl.rows[i].cells[j].style.backgroundColor = "";
			}
		}
	}
	/* -------------------- For 13x13 tables -------------------------*/
	var tbl2 = document.getElementById("table2");
	for (var i = 0; i < tbl2.rows.length - 1; i++) {
		hitArr2.push([]);
		boolArr7.push([]);
		for (var j = 0; j < tbl2.rows[i].cells.length - 1; j++)
			hitArr2[i][j] = Math.round(Math.random());
	}
	for (var i = 0; i < tbl2.rows.length - 1; i++) {
		for (var j = 0; j < tbl2.rows[i].cells.length - 1; j++) {
			if (hitArr2[i][j] == "1") {
				squareCount13++;
				tbl2.rows[i].cells[j].style.backgroundColor = "";
			}
		}
	}
	addTips();
	displayTips();
}

function colorFunction(color) {

	for (var i = 0; i < row; i++) {
		for (var j = 0; j < length; j++) {
			if (i == row && j == length)
				break;
			else {
				var a = i + 1;
				var b = j + 1;
				var tmp = "" + a + " " + b;

				document.getElementById(tmp).style.background = color;
			}
		}
	}
}

function gridColorFunction(color) {

	for (var i = 0; i < row; i++) {
		for (var j = 0; j < length; j++) {
			if (i == row && j == length)
				break;
			else {
				var a = i + 1;
				var b = j + 1;
				var tmp = "" + a + " " + b;

				document.getElementById(tmp).style.borderColor = color;

			}
		}
	}
}

function timer() {
	var x = setInterval(function () {
		sec++;
		if (sec < 60 && min == 0)
			document.getElementById("demo").innerHTML = sec + " seconds";// hours + "h "+ minutes + "m " + seconds + "s ";

		if (sec == 60) {
			sec = 0;
			min++;
		}

		if (min > 0)
			document.getElementById("demo").innerHTML = min + " minutes " + sec + " seconds";
		if (min == 60) {
			min = 0;
			hour++;
		}
		if (hour > 0)
			document.getElementById("demo").innerHTML = hour + " hours " + min + " minutes " + sec + " seconds";
		if (min >= endTime && doAttack) {
			alert("fail");
			console.log(min);
			doAttack = false;
		}
	}, 1000);
}

function seven() {
	document.getElementById("tblCont2").style.display = "none";
	document.getElementById("tblCont").style.display = "initial";
	active13=false;
	active7=true;
}
function thirteen() {
	document.getElementById("tblCont").style.display = "none";
	document.getElementById("tblCont2").style.display = "initial";
	active13=true;
	active7=false;
}
function gridColor(tmp) {
	document.getElementsByTagName("table")[0].style.borderColor = tmp;

	var x = document.getElementsByClassName("content");
	for (var i = 0; i < x.length; i++) {
		var item = x[i];//get the td with class name content
		item.style.borderColor = tmp;
		item.style.backGround = tmp;
	}

}
function backGroundColor(tmp) {
	document.getElementsByTagName("table")[0];

	var x = document.getElementsByClassName("content");
	for (var i = 0; i < x.length; i++) {
		var item = x[i];
		item.style.background = tmp;
		console.log(item);
	}

}

function addTips() {
	tbl = document.getElementById("table");
	hitArr.push([]); //without this, the columns don't work and throw an out of bounds error on array.
	var k; //incrementer for the row tips array
	var n; //incrementer for the col tips array
	for (var i = 0; i < tbl.rows.length - 1; i++) {
		k = 0;
		n = 0;
		for (var j = 0; j < tbl.rows[i].cells.length - 1; j++) {
			/*--------------- For Rows ----------------------*/
			if (hitArr[i][j] == 1 && hitArr[i][j + 1] == 1) {
				rowTip[i][k] = rowTip[i][k] + 1;

			}
			else if (hitArr[i][j] == 1 && hitArr[i][j + 1] != 1) {
				rowTip[i][k] = rowTip[i][k] + 1;
				k++;
			}
			else {
				rowTip[i][k] = rowTip[i][k];
			}
			/*-----------------------------------------------*/
			/*--------------- For Cols ----------------------*/
			if (hitArr[j][i] == 1 && hitArr[j + 1][i] == 1) {
				colTip[i][n]++;
			}
			else if (hitArr[j][i] == 1 && hitArr[j + 1][i] != 1) {
				colTip[i][n]++;
				n++;
			}
			else {
				colTip[i][n] = colTip[i][n];
			}
		}
		/*-----------------------------------------------*/
	}
	console.log(rowTip);
	console.log(colTip);
}
function level1() {console.log("wrong function");}
function level2() {//creates a simley face :)
	/* -------------------- For 7x7 tables -------------------------*/
	numTurns = 0;
	document.getElementById("turns").innerHTML = numTurns;
	var tbl = document.getElementById("table");
	for (var i = 0; i < tbl.rows.length - 1; i++) {
		hitArr.push([]);
		boolArr7.push([]);
		for (var j = 0; j < tbl.rows[i].cells.length - 1; j++) {
			boolArr7[i][j] = 0;
			hitArr[i][j] = 0;
		}
	}
	hitArr[2][2] = 1;
	hitArr[2][4] = 1;
	hitArr[4][1] = 1;
	hitArr[4][5] = 1;
	hitArr[5][2] = 1;
	hitArr[5][3] = 1;
	hitArr[2][4] = 1;
	numElem = 7;
	squareCount7 = 7;

	document.getElementById("elements").innerHTML = numElem;

	for (var i = 0; i < tbl.rows.length - 1; i++) {
		for (var j = 0; j < tbl.rows[i].cells.length - 1; j++) {
			if (hitArr[i][j] == "1") {
				tbl.rows[i].cells[j].style.backgroundColor = "";
			}
		}
	}
	/* -------------------- For 13x13 tables -------------------------*/
	var tbl2 = document.getElementById("table2");
	for (var i = 0; i < tbl2.rows.length - 1; i++) {
		hitArr2.push([]);
		boolArr13.push([]);
		for (var j = 0; j < tbl2.rows[i].cells.length - 1; j++) {
			boolArr13[i][j] = 0;
			hitArr2[i][j] = 0;
		}
	}
	hitArr2[2][2] = 1;
	hitArr2[2][4] = 1;
	hitArr2[4][1] = 1;
	hitArr2[4][5] = 1;
	hitArr2[5][2] = 1;
	hitArr2[5][3] = 1;
	hitArr2[2][4] = 1;

	for (var i = 0; i < tbl2.rows.length - 1; i++) {
		for (var j = 0; j < tbl2.rows[i].cells.length - 1; j++) {
			if (hitArr2[i][j] == "1") {
				tbl2.rows[i].cells[j].style.backgroundColor = "";
			}
		}
	}
}
function level3() {//creates 
	/* -------------------- For 7x7 tables -------------------------*/
	numTurns = 0;
	document.getElementById("turns").innerHTML = numTurns;
	var tbl = document.getElementById("table");
	numElem = 1;
	squareCount7 = 1;
	document.getElementById("elements").innerHTML = numElem;

	for (var i = 0; i < tbl.rows.length - 1; i++) {
		hitArr.push([]);
		boolArr7.push([]);
		for (var j = 0; j < tbl.rows[i].cells.length - 1; j++) {
			boolArr7[i][j] = 0;
			hitArr[i][j] = 0;
		}
	}
	hitArr[0][0] = 1;
	for (var i = 0; i < tbl.rows.length - 1; i++) {
		for (var j = 0; j < tbl.rows[i].cells.length - 1; j++) {
			if (hitArr[i][j] == "1") {
				tbl.rows[i].cells[j].style.backgroundColor = "";
			}
		}
	}
	/* -------------------- For 13x13 tables -------------------------*/
	var tbl2 = document.getElementById("table2");
	for (var i = 0; i < tbl2.rows.length - 1; i++) {
		hitArr2.push([]);
		boolArr13.push([]);
		for (var j = 0; j < tbl2.rows[i].cells.length - 1; j++) {
			boolArr13[i][j] = 0;
			hitArr2[i][j] = 0;
		}
	}
	hitArr2[10][10] = 1;
	for (var i = 0; i < tbl2.rows.length - 1; i++) {
		for (var j = 0; j < tbl2.rows[i].cells.length - 1; j++) {
			if (hitArr2[i][j] == "1") {
				tbl2.rows[i].cells[j].style.backgroundColor = "";
			}
		}
	}
}