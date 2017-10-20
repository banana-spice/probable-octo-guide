//Author: Victoria Braden
//File: race.js
//Date: 10/18/2017

var runDis1 = 0;
var runDis2 = 0;

function startRace(){
	document.getElementById('stoplight').src = 'images/start.png';
	runMeter = setInterval(runTime, 2500);
}

function reset(){
	var runDis1 = 0;
	var runDis2 = 0;
	margin1 = 0;
	margin2 = 0;
	document.getElementById("run2").style.marginLeft = margin2;
	document.getElementById("run1").style.marginLeft = margin1;
	
	document.getElementById("run1").src = "images/kimirun.png";
	document.getElementById("run2").src = "images/omirun.png";	
	document.getElementById("stoplight").src = "images/stop.png";
	document.getElementById("winner").innerhtml = " ";
}

function runTime(){
	
	randNum1 = Math.ceil(Math.random() * 150);
	runDis1 += randNum1;
	var margin1 = runDis1 + "px";
	document.getElementById("run1").style.marginLeft = margin1;
	
	randNum2 = Math.ceil(Math.random() * 150);
	runDis2 += randNum2;
	var margin2 = runDis2 + "px";
	document.getElementById("run2").style.marginLeft = margin2;
	
	if (runDis1 >= 300 && runDis2 >= 300){
		clearInterval(runMeter);
		document.getElementById("run2").src = "images/omipose.png";
		document.getElementById("run1").src = "images/kimipose.png";
		document.getElementById("winner").innerhtml = "<h2 onclick='reset();' >It's a Tie!</h2>";
	
	} else {
		if (runDis1 >= 300){
			clearInterval(runMeter);
			document.getElementById("run1").src = "images/kimipose.png";
			document.getElementById("winner").innerhtml = "<h2>Kimiko Wins!</h2> <img src='images/kimipose.png' onclick='reset();'>";
		}
		
		if (runDis2 >= 300){
			clearInterval(runMeter);
			document.getElementById("run2").src = "images/omipose.png";
			document.getElementById("winner").innerhtml = "<h2>Omi Wins!</h2> <img src='images/omipose.png' onclick='reset();'>";
		}
	}
}

