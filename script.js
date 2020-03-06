var bongden=document.getElementById("bongden");
var chuamau=['red','yellow','orange','blue','green','purple','pink'];
var dem=0;
function ChangeColor(){
	if(dem>chuamau.length){
		dem=0;
	}
	bongden.style.backgroundColor=chuamau[dem];
	dem++;
}
var myden=setInterval(ChangeColor, 100);

bongden.onmouseover=function(){
	clearInterval(myden);
}