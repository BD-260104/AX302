console.log("KIM Jong un sUPREME LEADER!!!!!!");
var c= document.getElementById('MyCanvas');
var ctx =c. getContext("2d");
//width and height variable
var WIDTH = 600;
var HEIGHT = 400;
//cricle properties
var x,y;
var mx, my;
var circleColor;

var x1, y1;
var mx1, my1;
var circleColor1;

//initialize anamation 

function init(){
	x= 300;
	y=200;
	mx=3;
	my=4;
	circleColor = randomColor();

	

	x1= 300;
	y1=200;
	mx1=3;
	my1=2;
	circleColor1 = randomColor();
		return setInterval( draw, 10 );

}


function circle(circleX,circleY,color){
	ctx.beginPath();
	ctx.arc(circleX,circleY ,30,0,6.28);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = color;
	ctx.fill();
    



}

function clear(){
	ctx.clearRect(0,0, WIDTH,HEIGHT);
    

}

function draw(){
	clear();
	circle(x,y,circleColor);
	//bounce
	if(x+mx <0 || x+mx >WIDTH){
		mx= -mx;
		circleColor = randomColor();

	}

	if(y+my <0 || y+my >HEIGHT){
		my= -my;
		circleColor = randomColor();
		
	}



	//change x and y
	x +=mx;
	y += my;


	//ball2

	circle(x1,y1,circleColor1);
	//bounce
	if(x1+mx1 <0 || x1+mx1 >WIDTH){
		mx1= -mx1;
		circleColor = randomColor();

	}

	if(y1+my1 <0 || y1+my1 >HEIGHT){
		my1= -my1;
		circleColor1 = randomColor();
		
	}



	//change x and y
	x1 +=mx1;
	y1 += my1;



}

function randomColor(){
	var r =Math.floor(Math.random()*255);
	var g =Math.floor(Math.random()*255);
	var b =Math.floor(Math.random()*255);

	return "rgb("+ r + "," + g + "," + b +")";

}



init()



