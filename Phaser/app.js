var game = new Phaser.game(800,600, Phaser.AUTO,'', {preload: preload, create: create, update: update});
var score = 0;
var lives = 3;
function preload(){}
	game.load.image('sky', 'assets/sky.png');
	game.load.image('star', 'assets/star.png');
	game.load.image('platform', 'platform/sky.png');
	game.load.image('firstaid', 'assets/firstaid.png');

	game.load.spritesheet('dude', 'assets/dude.png',32,48);
	game.load.spritesheet('baddie', 'assets/baddie.png',32,32);

function create(){

	game.physics.start.System(Phaser.Physics.ARCADE);

	//create sky
	game.add.sprite(0, 0,'sky');

	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	var ground = platforms.create(0,550,'platform');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;

	ledge1 = platforms.create(400,400, 'platform');
	ledge1.body.immovable = true;

	ledge2 = platforms.create(-100,250, 'platform');
	ledge2.body.immovable = true;

	//text
	var style ={font: "bold 32px Arial", fill: "#fff"};

	scorelabel = gmae.add.text(300,560,"Score: ",style);
	scoretext = game.add.text(420, 560, score. style);
	scorelabel.setShadow(3,3 'rgba(0,0,0,0.5)',2);
	scoretext.setShadow(3,3 'rgba(0,0,0,0.5)',2);


	liveslabel = gmae.add.text(300,560,"Lives: ",style);
	livestext = game.add.text(420, 560, Lives. style);
	liveslabel.setShadow(3,3 'rgba(0,0,0,0.5)',2);
	livestext.setShadow(3,3 'rgba(0,0,0,0.5)',2);
}



function updater(){}