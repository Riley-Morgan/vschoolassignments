const readlineSync = require('readline-sync');

console.log("You've been trapped inside a small dimly lit room. There is a door in front of you, and a small hole on the wall to your right. ");

var escapeOption = readlineSync.question('Enter 1 to put your hand in the hole, enter 2 to find the key, or enter 3 to open the door: ');
var hasKey = false;
// 1: Put your hand inside the hole
//var holeOption =
// 2: Find the key to open the door
//var keyOption =
// 3. Open the door
//var openDoor =

function whatHappens(escapeOption){
   
    if (escapeOption == 1){
        holeOption(); 
    }
    else if (escapeOption == 2){
        keyOption();
    }
    else if (escapeOption == 3){
        openDoor();
    }

}

function holeOption(){
    console.log('You put your hand in the hole...and feel something pull hard on your hand. It pulls until your arm is ripped off, and you eventually die of blood loss. The end.');
};

function keyOption(){
    console.log('You look around the room for the key. You spot it on the floor in one of the corners. You pick it up.');
    hasKey = true;
    var escapeOption = readlineSync.question('Enter 1 to put your hand in the hole, enter 2 to find the key, or enter 3 to open the door: ');
    whatHappens(escapeOption);
};

function openDoor(){
    if (hasKey == true){
        console.log("blah blah open door you win");
    }
    else if (hasKey == false){
        console.log("You go up to the door and turn the knob. It's locked. ");
        var escapeOption = readlineSync.question('Enter 1 to put your hand in the hole, enter 2 to find the key, or enter 3 to open the door: ');
        whatHappens(escapeOption);
    }
};


whatHappens(escapeOption);

// const readlineSync = require('readline-sync');

// var inRoom = true;
// var hasKey = false;

// console.log("HELP YOUR TRAPPED");

// while(inRoom) {

//   var escapeOption = readlineSync.question('What to do what to do');
//   whatHappens(escapeOption);
// }

// function whatHappens(escapeOption) {
//   if(escapeOption == 1) {
//     holeOption();
//   }
//   else if(escapeOption == 2) {
//     keyOption();
//   } else if(escapeOption == 3) {
//     openDoor();
//   }
// }

// function holeOption(){
//     console.log('You put your hand in the hole...and feel something pull hard on your hand. It pulls until your arm is ripped off, and you eventually die of blood loss. The end.');
// };

// function keyOption(){
//     console.log('You look around the room for the key. You spot it on the floor in one of the corners. You pick it up.');
//     hasKey = true;
// };

// function openDoor(){
//     if (hasKey == true){
//         inRoom = false;
//         console.log("blah blah open door you win");
//     }
//     else if (hasKey == false){
//         console.log("You go up to the door and turn the knob. It's locked. ");
//     }
// };


// whatHappens(escapeOption);