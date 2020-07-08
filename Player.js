class Person {
    constructor(){
        this.name = null;
        this.index = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data)=> {
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }

    static getPlayer(){
        var playerInfoRef = database.ref("Player");
        playerInfoRef.on("value", (data)=> {
            Players = data.val();
        })
    }

    Player(){
        var player = "Player/player"+ this.index;
        database.ref(player).set({
            name: this.name
        })
    }
}