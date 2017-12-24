//var em=document.getElementById("mail");

var pw=document.getElementById("pass");
function checkStrength() {
	var pas=pw.value;



var pro=0;
if (pas.length < 8) {
	//$("prvi").html("unesite dovoljan broj karaktera");
document.getElementById("cetvrti").innerHTML="-nemate dovoljan broj karaktera";
}
if (pas.length >= 8){
	document.getElementById("cetvrti").innerHTML="";
pro=pro+20;
document.getElementById("myProgress").value =pro;

}
if (pas.match(/([0-9])/)) {
	document.getElementById("drugi").innerHTML="";
pro=pro+20;
document.getElementById("myProgress").value =pro;

}
if (pas.match(/([a-z])/)) {
	document.getElementById("treci").innerHTML="";
	pro=pro+20;
document.getElementById("myProgress").value =pro;

}
 if (pas.match(/([A-Z])/)) {
	document.getElementById("prvi").innerHTML="";
	pro=pro+20;
document.getElementById("myProgress").value =pro;

}
if (pas.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
	document.getElementById("peti").innerHTML="";
	pro=pro+20;
document.getElementById("myProgress").value =pro;

}
if ((pas.length >= 8)&&(pas.match(/([0-9])/))&&(pas.match(/([a-z])/))&&(pas.match(/([A-Z])/))&&(pas.match(/([!,%,&,@,#,$,^,*,?,_,~])/))) {
	
	
	document.getElementById("prvi").innerHTML="TVOJ PASSWORD JE IZUZETAN!";
   document.getElementById("prvi").className="text-success";
   document.getElementById("drugi").innerHTML="TI SI ALFA MUŽJAK!"
    document.getElementById("drugi").className="text-success";
 /*  document.getElementById("drugi").className="element:before";*/
    /*document.getElementById("prvi").classList.add("element:before");*/
  /* document.getElementById("prvi").setAttribute("class", "drugi:before");*/
}
if (!pas.match(/([0-9])/)) {
	document.getElementById("drugi").innerHTML="-obavezan jedan broj";
  document.getElementById("drugi").className="text-info";
}
if (!pas.match(/([a-z])/)) {
	document.getElementById("treci").innerHTML="-obavezno jedno malo slovo";
}
if (!pas.match(/([A-Z])/)) {
	document.getElementById("prvi").innerHTML="-obavezno jedno veliko slovo";
	document.getElementById("prvi").className="text-info";
}
if (!pas.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
	document.getElementById("peti").innerHTML="-obavezan jedan specijalni karakter";
} 
if (pas=="") {
	document.getElementById("myProgress").value =0;
}



}
//});*/
function RestrictSpace() {
    if (event.keyCode == 32) {
        return false;
    }
}
