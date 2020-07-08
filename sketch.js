var hurdle, form, player, canvas;

var hurdleImage, trackImage, runnerImage;
var playerCount, Players;
var gameState = 0;

var database;

function preload(){
    //Images to be loaded of the runner, track and hurdle
}
function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();
    form = new Form();
    player = new Players();
}

function draw(){
    
    background(255, 255, 255);

    form.display();
}