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

	//player sprite
	player  = game.add.sprite(10,300, 'dude');
	  player.animations.add('left',[0,1,2,3],10, true );
	  player.animations.add('right',[5,6,7,8],10, true );
      game.physics.acrade.enable(player);

	  player.body.gravity.y =300;
	  player.body.bounce.y= 0.2;
	  player.body.colliderWorldBounds = true;

	  //enemeny sprite
	  baddie = game.add.sprite( 20,200,baddie);
	  enemeny aimmations.add("left",[0,1],10,true);
	  enemeny aimmations.add("right",[2,3],10,true);
	  game.physics.acrade.enable(enemeny);
	  enemeny.body.gravity.y =500;
	  enemeny.body.bounce.y=0.2;
	  enemeny.body.colliderWorldBounds = true;

	  //create star
	  stars=game.add.physicsGroup();
	  stars=enableBody = true;
	  for(var i = 0; i < 12   ;i++){
	  	var star=stars.create( i *70=0 ,0 , 'star');
        star.body.gravity.y=200;
        star,body.bounce.y =Math.ramdom()*0.2+0.7
	}
        //create keyboard entires

        cursors= game.input.keyboard.createCursorkeys()
        wKey=game.input.keyboard.addkey(Phaser.Keyboard.W)
        aKey=game.input.keyboard.addkey(Phaser.Keyboard.a)
        dKey=game.input.keyboard.addkey(Phaser.Keyboard.d)

	  }

	  function update(){
	  	game.physics.arcade.collide(player,platforms);
	  	game.physics.arcade.collide(stars,platforms);
	  	ame.physics.arcade.collide(enemeny,platforms);

	  	player.body.verlocity.x=0
	  	if(akey.isDown){
	  		player.body.verlocity.x = -150;
	  		player.animations.play("left");
            
	  	} else if (cursors.right.isDown|| dkey.isDown){
	  	player.body.verlocity.x=150;
	  	player.animations.play("right");

	  }else {
	  	player.animations.stop():
	  	player.frame= 4;

	  }
	  if(cursors.up.isDown || wKey.is down && player.body.touching.down){

	  	player.body.verlocity.y= -300;
	  }
}

