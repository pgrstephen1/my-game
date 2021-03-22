class Player {
    constructor() {
        this.index = null;
        this.xPosition = 0;
        this.yPosition = 0;
        this.name = null;
        this.score =0;
        this.lives=0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    getLives(){
        var playerIndex="player"+ this.index;
        var livesRef = database.ref(playerIndex);
        livesRef.on("value", (data) => {
            lives = data.val();
        })
    }

    updateLives(live){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            live: this.lives
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            xPosition: this.xPosition,
            yPosition: this.yPosition,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
