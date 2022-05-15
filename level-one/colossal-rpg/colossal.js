const readlineSync = require('readline-sync');

console.log("Welcome, weary traveller! Wait... you don't seem to be from around these parts. No matter, go forth and start a wonderous journey.");

console.log();

let name = readlineSync.question('What do they call you traveller?: ');

console.log();

let nameHealth = 100;

const enemyList = [
    {
        name: "Snake woman",
        health: 50,
        item: "piece of snake shed"
    },
    {
        name: "Telkenine",
        health: 55,
        item: "dried fish"
    },
    {
        name: "Hellhound",
        health: 60,
        item: "small hellfire"
    },
    {
        name: "Killer wild hog",
        health: 50,
        item: "bloody tooth"
    }
];

let playerInventory = [];




while (nameHealth > 0) {
    let walkChoice = readlineSync.question("Press 'w' to traverse: ");

    if(walkChoice == "w"){

        let walkRandom = Math.random();

        if (0.34 <= walkRandom) {
            walkForward();
        }

        else if (walkRandom < 0.34) {
            const enemy = enemyEncounter();

            while (nameHealth > 0) {

                let runOrFight = readlineSync.question("Will you run, or fight?: ");

                if (runOrFight == 'run') {
                    let runChance = Math.random();

                    if (0.50 <= runChance) {
                        runSuccess();
                        break;
                    }

                    else if (runChance < 0.50) {
                        runFail();
                    }
                }

                else if (runOrFight == 'fight') {
                    console.log("##########");
                    fightEnemy(enemy);
                    console.log("##########");
                    break;
                }

            }

        }
    }

    else if(walkChoice == "print" || "p"){
        printPlayerInfo();
    }

}

if(nameHealth < 0){
    console.log("It seems like your journey has come to an end, " + name + ".");
    console.log("Perhaps you will fare better in the next life...");
}

function enemyEncounter() {

    const randomEnemy = enemyList[Math.floor(Math.random() * enemyList.length)];

    console.log("A " + [randomEnemy.name] + " with " + [randomEnemy.health] + " has appeared!");

    return {...randomEnemy};
};

function fightEnemy(randomEnemy) {
    while (nameHealth > 0) {

        youHit = randomDmg(20);
        theyHit = randomDmg(20);
        randomEnemy.health -= youHit;
        nameHealth -= theyHit;
        
        if(nameHealth <= 0){

            console.log(randomEnemy.name + " hit you for " + theyHit);
            console.log("your health is now at 0!");
            console.log("On no, you have been defeated!");
            break;
        }

        if(randomEnemy.health < 0){

            console.log("You hit " + randomEnemy.name + " for " + youHit);
            console.log(randomEnemy.name + ' is now at 0!');
            console.log('You defeated the enemy!');
            console.log();
            nameHealth += 20;
            console.log("You regained 20 HP! You're health is now at " + nameHealth);

            playerInventory.push(randomEnemy.item);
            console.log("You picked up a " + randomEnemy.item + " and added it to your inventory!");

            break;
        }

        if(randomEnemy.health > 0 && nameHealth > 0){

            console.log("You hit " + randomEnemy.name + " for " + youHit);
            console.log(randomEnemy.name + ' is now at ' + randomEnemy.health);

            console.log("~~~~~~~~~~");

            console.log(randomEnemy.name + " hit you for " + theyHit);
            console.log('your health is now at ' + nameHealth);

            console.log("~~~~~~~~~~");
            
        }

    }
    
}

function walkForward() {
    console.log("walk forward");
};

function runSuccess() {
    console.log('You ran away safely!');
}

function runFail() {
    console.log('You could not get away from this fight!');
}

function randomDmg(max) {
    return Math.floor(Math.random() * max);
}

function printPlayerInfo(){

    console.log("+----------+");
    console.log(name);
    console.log(nameHealth);
    console.log(playerInventory);
    console.log("+----------+");
    
    return
}

