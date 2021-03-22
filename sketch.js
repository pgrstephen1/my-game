var database;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var player1score =0;
var player2score =0;
var obstacle, obstacleGroup;
var ground;

//function preload(){
//}

function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}  
 
function draw() {
  background("red");
  
  if (gameState === 1) {
    clear(); 
    game.play();
    game.spawnObstacle();

    ground = createSprite(500,0,2000,10);
    ground.shapeColor = "black";
    ground.velocityY = 3;
    if(ground.y>600)
    {
      ground.y=0;
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      console.log("hi");
    player.xPosition+=10;
   player.update();
   }
   if(keyIsDown(LEFT_ARROW)) {
       console.log("bye");
   player.xPosition -= 10
   player.update();
   }

   //player1.collide(ground);
   //player2.collide(ground);
    
    if(obstacle !== undefined && obstacle.isTouching(player)){
      player.udpateLives(-1);
    }
    drawSprites();
  }

  if (gameState === 2) {
    game.end();
  }

  if (playerCount === 2) {
    game.update(1);
  }


}