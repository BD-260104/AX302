var game = new Phaser.Game(800,600, Phaser.AUTO,'', {preload: preload, create: create, update: update});
var score = 0;
var lives = 3;
function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('star', 'assets/star.png');
	game.load.image('platform', 'assets/platform.png');
	game.load.image('firstaid', 'assets/firstaid.png');

	game.load.spritesheet('dude', 'assets/dude.png',32,48);
	game.load.spritesheet('baddie', 'assets/baddie.png',32,32);
}
	

function create(){

	game.physics.startSystem(Phaser.Physics.ARCADE);

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

	scorelabel = game.add.text(300,560,"Score: ",style);
	scoretext = game.add.text(420, 560, score, style);
	scorelabel.setShadow(3,3, 'rgba(0,0,0,0.5)',2);
	scoretext.setShadow(3,3,'rgba(0,0,0,0.5)',2);


	liveslabel = game.add.text(10,10,"Lives: ",style);
	livestext = game.add.text(120, 10, lives, style);
	liveslabel.setShadow(3,3, 'rgba(0,0,0,0.5)',2);
	livestext.setShadow(3,3, 'rgba(0,0,0,0.5)',2);

	//player sprite
	player  = game.add.sprite(10,300, 'dude');
	  player.animations.add('left',[0,1,2,3],10, true );
	  player.animations.add('right',[5,6,7,8],10, true );
      game.physics.arcade.enable(player);

	  player.body.gravity.y =300;
	  player.body.bounce.y= 0.2;
	  player.body.collideWorldBounds = true;

	  //enemeny sprite
	  enemeny = game.add.sprite( 20,200,'baddie');
	  enemeny.animations.add("left",[0,1],10,true);
	  enemeny.animations.add("right",[2,3],10,true);
	  game.physics.arcade.enable(enemeny);
	  enemeny.body.gravity.y =500;
	  enemeny.body.bounce.y=0.2;
	  enemeny.body.collideWorldBounds = true;

	  //create star
	  stars=game.add.physicsGroup();
	  stars.enableBody = true;
	  for(var i = 0; i < 12   ;i++){
	  	var star=stars.create( i *70 ,0 , 'star');
        star.body.gravity.y=200;
        star.body.bounce.y =Math.random()*0.2+0.7
	}
        //create keyboard entires

        cursors= game.input.keyboard.createCursorKeys()
        wKey=game.input.keyboard.addKey(Phaser.Keyboard.W)
        aKey=game.input.keyboard.addKey(Phaser.Keyboard.A)
        dKey=game.input.keyboard.addKey(Phaser.Keyboard.D)

	  }

	  function update(){
	  	game.physics.arcade.collide(player,platforms);
	  	game.physics.arcade.collide(stars,platforms);
	  	game.physics.arcade.collide(enemeny,platforms);

	  	player.body.velocity.x=0
	  	if(aKey.isDown){
	  		player.body.velocity.x = -150;
	  		player.animations.play("left");
            
	  	} else if (cursors.right.isDown|| dKey.isDown){
	  	player.body.velocity.x=150;
	  	player.animations.play("right");

	  }else {
	  	player.animations.stop();
	  	player.frame= 4;

	  }
	  if(wKey.isDown && player.body.touching.down){

	  	player.body.velocity.y= -300;

	  }
	  //overlapes
	  game.physics.arcade.overlap(player,stars,collectStar);
	  game.physics.arcade.overlap(player,enemeny,loseLive);

	  moveEnemy();

	  if(lives <-1){
	  	endGame();
	  }


}
function collectStar(player,star ){
	//add to score
	score++;
	scoretext.setText(score);

	//star to reset
	star.kill();
	star.reset(Math.random()*750,0);

}

function loseLive(player,enemeny){
	//- live
	lives--;
	livestext.setText(lives);

	enemeny.kill();
	enemeny.reset(Math.random()*750,0);

}

function moveEnemy(){
	if(enemeny.x >739){
		enemeny.animations.play('left');
		enemeny.body.velocity.x=-120;

	}else if(enemeny.x<400){
		enemeny.animations.play('right');
		enemeny.body.velocity.x=120;


	}

}
function endGame(){
	player.kill();
	liveslabel.visible = false;
	livestext.visible= false;
	scoretext.visible=false;
	scorelabel.text ="GAME OVER! You Scored" + score;


}
