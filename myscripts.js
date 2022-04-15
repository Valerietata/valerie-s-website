

function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txt1").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "1.txt", true);
  xhttp.send();
}


function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txt2").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "2.txt", true);
  xhttp.send();
}

function loadDoc3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txt3").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "3.txt", true);
  xhttp.send();
}

function loadDoc4() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txt4").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "4.txt", true);
  xhttp.send();
}








function ok() {
    var Email =document.getElementById("Email").value;
	var Phone =document.getElementById("Phone").value;
	
	var obj = document.getElementsByName("preference");
 for(var i = 0; i < obj.length; i ++) {
     if (obj[i].checked) {
         var type = obj[i].value;
     }
 }
 var contact;
 if (type==2){
	 contact="Email ["+Email+"]"
	 
	 }
	 else{
		contact="Phone ["+Phone+"]" 
		 }

alert("I will contact you through "+contact)
	 return true;
}