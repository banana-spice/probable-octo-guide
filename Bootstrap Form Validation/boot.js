//Author: Victoria Braden
//Date: 10-11-2017
//File: boot.js

function userName(){
	var nameLength = document.bootval.userName.value.length;
	if (nameLength < 6){
		document.getElementById("nameErr").style.display = "block"; 
		document.getElementById("userName").style.backgroundColor = "pink";
	} else{
		document.getElementById("nameErr").style.display = "none"; 
		document.getElementById("userName").style.backgroundColor = "white";
		var nameVal = document.bootval.userName.value;
		var goodNam = true;
	}
	return false;
}

function checkMon(){
	var checked = 0;
    var len = document.bootval.pickMon.length;

	for(var i = 0; i < len; i++) {
		if(document.bootval.pickMon[i].checked){
			var checked = 1;
			var monVal = document.bootval.pickMon.value;
			var goodMon = true;
		}
	}
	if(checked == 0){
		alert("A Monster must be selected")
	}
}

function checkPhone(){
	var phoneVal = document.bootval.userPhone.value;
	var patt = new RegExp(/\d{10}/);
	var res = patt.test(phoneVal);
	
	if (res == false) {
		document.getElementById("phoneErr").style.display = "block"; 
		document.getElementById("userPhone").style.backgroundColor = "pink";
	} else{
		document.getElementById("phoneErr").style.display = "none"; 
		document.getElementById("userPhone").style.backgroundColor = "white";
		var phoneVal = document.bootval.userPhone.value;
		var goodPhone = true;
	}
}


function emailCheck(){
	var eVal = document.bootval.userEmail.value;
	var patt = new RegExp (/\S+@\S+(\.\w{2,})+$/);
	var res = patt.test(eVal);
	
	if (res == false) {
		document.getElementById("emailErr").style.display = "block"; 
		document.getElementById("userEmail").style.backgroundColor = "pink";
	} else{
		document.getElementById("emailErr").style.display = "none"; 
		document.getElementById("userEmail").style.backgroundColor = "white";
		var emailVal = document.bootval.userEmail.value;
		var goodEmail = true;
	}
}

function check(){
	userName();
	emailCheck();
	checkPhone();
	checkMon();
	
	if (goodNam = true){
		if (goodEmail = true){
			if (goodPhone = true){
				if (goodMon = true){
					
				}
			}
		}
	}
	
}
