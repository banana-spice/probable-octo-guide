//Author: Victoria Braden
//Date: 10-11-2017
//File: boot.js

var blank = "";

function userName(){
	var nameLength = document.bootval.userName.value.length;
	if (nameLength < 6){
		document.getElementById("nameErr").style.display = "block"; 
		document.getElementById("userName").style.backgroundColor = "pink";
		return blank;
	} else{
		document.getElementById("nameErr").style.display = "none"; 
		document.getElementById("userName").style.backgroundColor = "white";
		var nameVal = document.bootval.userName.value;
		return nameVal;
	}
}

function emailCheck(){
	var eVal = document.bootval.userEmail.value;
	var patt = new RegExp (/\S+@\S+(\.\w{2,})+$/);
	var res = patt.test(eVal);
	
	if (res == false) {
		document.getElementById("emailErr").style.display = "block"; 
		document.getElementById("userEmail").style.backgroundColor = "pink";
		return blank;
	} else{
		document.getElementById("emailErr").style.display = "none"; 
		document.getElementById("userEmail").style.backgroundColor = "white";
		var emailVal = document.bootval.userEmail.value;
		return emailVal;
	}
}

function checkPhone(){
	var phoneVal = document.bootval.userPhone.value;
	var patt = new RegExp(/\d{10}/);
	var res = patt.test(phoneVal);
	
	if (res == false) {
		document.getElementById("phoneErr").style.display = "block"; 
		document.getElementById("userPhone").style.backgroundColor = "pink";
		return blank;
	} else{
		document.getElementById("phoneErr").style.display = "none"; 
		document.getElementById("userPhone").style.backgroundColor = "white";
		var phoneVal = document.bootval.userPhone.value;
		return phoneVal;
	}
}

function checkMon(){
	var checked = 0;
    var len = document.bootval.pickMon.length;

	for(var i = 0; i < len; i++) {
		if(document.bootval.pickMon[i].checked){
			var checked = 1;
			
		}
	}
	if(checked == 0){
		alert("A Monster must be selected")
		return blank;
		
	} else {
		var monVal = document.bootval.pickMon.value;
		return monVal;
	}
}



function check(){
	var nameVal = userName();
	var emailVal = emailCheck();
	var phoneVal = checkPhone();
	var monVal = checkMon();	
	var hauntVal = document.bootval.whatHaunt.value;
	
	var pass = " ";
	
	var ary = [nameVal, emailVal, phoneVal, monVal];
	var sneak = 0;
	for(i = 0; i < ary.length; i++) {
		if (ary[i] = ""){
			sneak += 1;
		}
	}
	
	if (sneak > 0){
		var pass = "";
	} else {
		var pass = nameVal + emailVal + phoneVal + monVal;
	}
	
	if (pass != ""){
		window.location.assign("thanks.html");
		
		var x = location.search;	
		document.getElementById("formFill").write(x);

	}
	
}





