const readlineSync = require("readline-sync")

class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
}

let namePicked = readlineSync.question('Choose your character: Mario or Luigi ');

const newPlayer = new Player( namePicked, 0, "Big", false)

let waHaa = setInterval(oneTurn, 1000);



function gotHit() {

    if (newPlayer.hasStar == true) {
        newPlayer.hasStar = false;
        console.log("Your star protected you!")
    }
    else if( newPlayer.hasStar == false) {
       if (newPlayer.status == "Powered Up"){
        newPlayer.status = "Big";
        }

        else if (newPlayer.status == "Big"){
        newPlayer.status = "Small";
        }

        else if (newPlayer.status == "Small"){
        newPlayer.status = "Dead";
        } 
    }
    return newPlayer.status
}

function gotPowerup() {
    if (newPlayer.status == "Small") {
        newPlayer.status = "Big";
    }

    else if (newPlayer.status == "Big") {
        newPlayer.status = "Powered Up"
    }

    else if (newPlayer.status == "Powered Up") {
        newPlayer.hasStar = true;
        console.log("Congratulations, You got a star!");
    }
    return newPlayer.status
}

function addCoin() {
    newPlayer.totalCoins ++
    return newPlayer.totalCoins
}

function printPlayer() {
    if(newPlayer.status == "Dead"){
        console.log(`You died! Your final score was ${newPlayer.totalCoins}`);
        clearInterval(waHaa)
    }

    else {
        console.log(newPlayer);
    }
}

function getRng(max) {
    return Math.floor(Math.random() * max);
}

function oneTurn() {
    let turnOut = getRng(3);

    if(turnOut == 0) {
        gotHit();
    }

    else if(turnOut == 1) {
        gotPowerup();
    }

    else if(turnOut == 2) {
        addCoin();
    }

    printPlayer();
}




