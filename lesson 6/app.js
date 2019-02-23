console.log("KIM Jong un sUPREME LEADER!!!!!!");
var c = document.getElementById('MyCanvas');
var ctx =c. getContext("2d");
var WIDTH =600;
var HEIGHT =600;
//postiton and size of player

var x,y, s;
//player movement
var mx, my;

var score=0
//postition,size of circle
var circleX,circleY,circleS;
circleCollision = false;
//import images
function drawPacman (){
	var Pacman = new Image();
	Pacman.src ="pac man.png";
	ctx.drawImage(Pacman,x,y,s,s);


}

//import images
function drawcircle (){
	var circle = new Image();
	circle.src ="circle.jpg";
	ctx.drawImage(circle,circleX,circleY,circleS,circleS);
	

	}
function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);

}
function init(){
	x = 300;
	y = 300;
	s = 50;
	mx = 0;
    my = 0;
    circleS = 50;
    circleX = Math.floor(Math.random() * (WIDTH - circleS) );
    circleY=  Math.floor(Math.random() * (HEIGHT - circleS) );

    window.onkeydown = keydownControl;

    return setInterval(draw,10);



}

function keydownControl(e){
	if(e.keyCode == 37){
		mx = -4;
		my = 0;

	}
if(e.keyCode == 38){
		mx = 0;
		my = -4;
		
	}

if(e.keyCode == 39){
		mx = 4;
		my = 0;
		
	}
if(e.keyCode == 40){
		mx = 0;
		my = 4;
		
	}
}


function draw(){
	clear();
	drawPacman();
	drawcircle();

	x += mx;
	y += my;

	if(x > WIDTH -s || x < 0){
		mx= -mx;
	}

	if(x > HEIGHT -s || x < 0){
		my= -my;
	}
	collisonCheck();
	collisonHandle();

}
function collisonHandle(){
	if(circleCollision ){

		circleX = Math.floor(Math.random() * (WIDTH - circleS) );
    	circleY=  Math.floor(Math.random() * (HEIGHT - circleS) );

		score += 1;
		document.getElementById("score").innerHTML = score;

	}

}

function collisonCheck(){
	if((x+s >= circleX)&& (x <= circleX + circleS) &&
	(y+s >= circleY)&& (y <= circleY + circleS) ){

		circleCollision = true;
		console.log(x + " , " + y)

	} else{
		circleCollision = false;

	}
}


init()


