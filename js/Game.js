class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
        player1 = createSprite(200,500);
        player2 = createSprite(800,500);
        players=[player1,player2];
    }
    
    play(){
       // console.log(players[0].x);
        form.hide();

        Player.getPlayerInfo();
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].xPosition;
            y=500-allPlayers[plr].yPosition;
            
            players[0].x = 400;
            players[0].y = 500;



            if(index === player.index){   
                fill("black");
                textSize(25);
                text(allPlayers[plr].name ,x-25,y+25); 
            }
           
           textSize(25);
           fill("blue");
           text("Player 1: " + allPlayers.player1.score,50,50);
           text("Player 2: " + allPlayers.player2.score, 200, 50);
        }
        }

    end(){
       clear();
       text("Game Over", displayWidth/2, displayHeight/2);
    }

    spawnObstacle(){
    if(frameCount%250 === 0){
        obstacle=createSprite(200,200,800,400);
        obstacle.setVelocityX = -7;
    }
    }
}

