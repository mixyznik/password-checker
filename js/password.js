//var em=document.getElementById("mail");
var pw=document.getElementById("pass");
function checkStrength() {
	var pas=pw.value;

var pro=0;
if (pas.length < 8) {
	//$("prvi").html("unesite dovoljan broj karaktera");
document.getElementById("cetvrti").innerHTML="vise";
}
if (pas.length >= 8){
	document.getElementById("cetvrti").innerHTML="tvoj Mojo je veci za +1";
pro=pro+20;
document.getElementById("myProgress").value =pro;

}
if (pas.match(/([0-9])/)) {
	document.getElementById("drugi").innerHTML="tvoj Mojo je veci za +1";
pro=pro+20;
document.getElementById("myProgress").value =pro;

}
if (pas.match(/([a-z])/)) {
	document.getElementById("treci").innerHTML="tvoj Mojo je veci za +1";
	pro=pro+20;
document.getElementById("myProgress").value =pro;

}
 if (pas.match(/([A-Z])/)) {
	document.getElementById("prvi").innerHTML="tvoj Mojo je veci za +1";
	pro=pro+20;
document.getElementById("myProgress").value =pro;

}
if (pas.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
	document.getElementById("peti").innerHTML="tvoj Mojo je veci za +1";
	pro=pro+20;
document.getElementById("myProgress").value =pro;

}
if ((pas.length >= 8)&&(pas.match(/([0-9])/))&&(pas.match(/([a-z])/))&&(pas.match(/([A-Z])/))&&(pas.match(/([!,%,&,@,#,$,^,*,?,_,~])/))) {
	
	document.getElementById("cetvrti").innerHTML="";
	document.getElementById("drugi").innerHTML="";
	document.getElementById("treci").innerHTML="";
	document.getElementById("prvi").innerHTML="TVOJ PASSWORD JE IZUZETAN";
	document.getElementById("peti").innerHTML="";


}




}
//});

