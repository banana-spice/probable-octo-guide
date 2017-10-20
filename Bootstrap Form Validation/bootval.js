//Author: Victoria Braden
//Date: 10-11-2017
//File: bootval.js

function removeSelectDefaults() {
	var emptyBoxes = document.getElementsByTagName("select");
	for (var i = 0; i < emptyBoxes.length; i++) {
		emptyBoxes[i].selectedIndex = -1;
	}
}

if (window.addEventListener) {
	window.addEventListener("load", removeSelectDefaults, false);
	} else if (window.attachEvent) {
	window.attachEvent("onload", removeSelectDefaults);
}

function checkName(form) {
	var MyValueLength = form.userName.value.length;
    var myValue = form.userName.value;
	if (MyValueLength < 6){
	alert("Required fields are missing");
	}
	return false;  
}

function checkMons(form) {
	var checked = 0;
    var len = form.pickMon.length;

	for(var i = 0; i < len; i++) {
		if(form.pickMon[i].checked){
			var checked = 1;
		}
	}
	if(checked == 0){alert("A Monster must be selected")}
} 

function checkSelect(form) {
    var len = form.whatHaunt.length;

	for(var i = 0; i < len; i++) {
		if(form.whatHaunt.options[i].selected)
	}
} 

function checkForm(form){
	checkName();
	checkMons();
	checkSelect();
}