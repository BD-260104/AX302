console.log("KIM Jong un sUPREME LEADER!!!!!!");
var c= document.getElementById('MyCanvas');
var ctx =c. getContext("2d");

var img = new Image()
img.src = 'TFUE.png';

img.onload = function(){
	ctx.drawImage(img,100,100,100,100 );
}



var c1= document.getElementById('MyCanvas');
var ctx1 =c1.getContext("2d");

ctx1.font = "italic 30px Tahoma"
ctx1.fillStyle = 'black';
ctx1.strokeStyle = 'black';
ctx1.fillText('Respect The KING',50,50);
ctx1.strokeText('FEAR ME',100,100);

