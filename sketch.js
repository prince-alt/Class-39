var database,position;
var gamestate = 0;
var playercount,form1,game1,player1;
var allplayers;
var cars,car1,car2,car3,car4;

function setup(){

    database = firebase.database();

    createCanvas(displayWidth-20,displayHeight-30);

    game1 = new game();
    game1.getState();
    game1.start();
    

}

function draw(){

    background("white");

    if(playercount == 4){

 game1.update(1);

    }

    if(gamestate == 1){

clear();
game1.play()

    }
   
    drawSprites();
}

