class Form {
    constructor(){
        this.EnterName = createElement('h2');
        this.name = createElement('input');
        this.button = createButton('Play');
    }

    hide(){
        this.EnterName.hide();
        this.name.hide();
    }
    
    display(){
        this.EnterName.html("Hurdle Game");
        this.EnterName.position(displayWidth / 2 -50, 0);
        this.name.position(displayWidth / 4, displayHeight / 2 - 100);
        this.button.position(displayWidth / 5, displayHeight / 2 - 50);
        this.button.mousePressed(() => {
            this.hide();
            this.player.name = this.name.value();
            player.getCount();
            playerCount+=1;
            player.index = playerCount;
            player.Player();
            player.updateCount(playerCount);
            this.EnterName.html("Hello "+player.name+" Wait for other players join");
        })
    }
}