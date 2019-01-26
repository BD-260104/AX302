console.log("KIM Jong un sUPREME LEADER!!!!!!");
var c= document.getElementById('MyCanvas');
var ctx =c. getContext("2d");
var img = new Image()
img.src = 'DUSTY';

img.onload = function(){
	ctx.drawImage(img,50,50,100,100 );
}