class Game {
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameState.on("value", (data) => {
            gameState = data.val();
        })
    }
}