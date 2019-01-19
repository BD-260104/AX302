console.log("KIM Jong un sUPREME LEADER!!!!!!");
var c= document.getElementById('MyCanvas');
var ctx =c. getContext("2d");
ctx.arc(150,250,200,0,6.28)
ctx.stroke()
ctx.fillstyle = "cyan";
ctx.fill();
ctx.beginPath();
ctx.moveTo(150,20);
ctx.lineTo(10,150);
ctx.lineTo(290,150);
ctx.closePath();
ctx.strokeStyle="green";
ctx.stroke();
ctx.fillstyle="lightgreen";
ctx.fill();
var c2= document.getElementById('Canvas2');
var ctx2 =c2.getContext("2d");
ctx2.beginPath();
ctx2.moveTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.strokeStyle = "lightgreen"
ctx2.stroke();
ctx2.fillstyle = "green"
ctx2.fill();


