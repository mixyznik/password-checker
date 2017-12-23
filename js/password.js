//var em=document.getElementById("mail");
var pw=document.getElementById("pass");
function checkStrength() {
	var pas=pw.value;

if (pas.length < 8) {
	//$("prvi").html("unesite dovoljan broj karaktera");
document.getElementById("cetvrti").innerHTML="vise";
}
if (pas.length >= 8){
	document.getElementById("cetvrti").innerHTML="tvoj Mojo je veci za +1";
}
if (pas.match(/([0-9])/)) {
	document.getElementById("drugi").innerHTML="tvoj Mojo je veci za +1";
}
if (pas.match(/([a-z])/)) {
	document.getElementById("treci").innerHTML="tvoj Mojo je veci za +1";
}
 if (pas.match(/([A-Z])/)) {
	document.getElementById("prvi").innerHTML="tvoj Mojo je veci za +1";
}
if (pas.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
	document.getElementById("peti").innerHTML="tvoj Mojo je veci za +1";
}
if ((pas.length >= 8)&&(pas.match(/([0-9])/))&&(pas.match(/([a-z])/))&&(pas.match(/([A-Z])/))&&(pas.match(/([!,%,&,@,#,$,^,*,?,_,~])/))) {
	myTable.setAttribute("bgcolor","#FF0000");
	document.getElementById("myTable").innerHTML="opa";

}




}
//});