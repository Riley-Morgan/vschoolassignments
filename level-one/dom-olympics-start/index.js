//import $ from 'jquery';


var newHeader = document.createElement("h1");
newHeader.textContent = "Javascript made this!"
newHeader.style.textAlign = "center"
// newHeader.style.fontSize = "25px"
// newHeader.style.fontFamily = "verdana"
// newHeader.style.color = "salmon"
document.body.appendChild(newHeader);

// var myName = document.createElement("p");
// myName.textContent = "Riley Morgan"
// myName.textAlign = "center"
// myName.style.color = "purple"
// myName.style.fontSize = "18px"
// myName.style.fontFamily = "verdana"
// document.body.appendChild(myName);

var h2 = document.createElement("h2");
h2.innerHTML = "<span class='name'>Riley</span> wrote the Javescript!"
// h2.textContent = " wrote the Javascript!"
// h2.style.textAlign = "center"
// h2.style.fontSize = "18px"
// h2.style.fontFamily = "verdana"
// h2.style.color = "magenta"
document.body.appendChild(h2);

var headerMade = document.getElementById("header");
headerMade.style.textAlign = "center"

headerMade.appendChild(newHeader);

// var span = document.createElement("span");
// span.style.alignContent = "center"

headerMade.append(h2);
// span.appendChild(myName);
// span.appendChild(h2);

var textMessages = document.getElementById("messages");

console.log(textMessages);
var messageOne = document.createElement("div");
var messageOneP = document.createElement("p");
messageOne.className = "messages";
messageOneP.className = "left";
messageOneP.textContent = "Come with me to the beach tomorrow!";
messageOne.appendChild(messageOneP);
textMessages.appendChild(messageOne);

var messageTwo = document.createElement("div");
var messageTwoP = document.createElement("p");
messageTwo.className = "messages";
messageTwoP.className = "right";
messageTwoP.textContent = "That sounds great!";
messageTwo.appendChild(messageTwoP);
textMessages.appendChild(messageTwo);

var messageThree = document.createElement("div");
var messageThreeP = document.createElement("p");
messageThree.className = "messages";
messageThreeP.className = "left";
messageThreeP.textContent = "Meet me around 12pm";
messageThree.appendChild(messageThreeP);
textMessages.appendChild(messageThree);

var messageFour = document.createElement("div");
var messageFourP = document.createElement("p");
messageFour.className = "messages";
messageFourP.className = "right";
messageFourP.textContent = "Alright, I'll call when I'm on my way";
messageFour.appendChild(messageFourP);
textMessages.appendChild(messageFour);


let clear = document.getElementById("clear-button")
clear.onclick = function () { clearMessage() };

function clearMessage() {
    textMessages.innerHTML = "";
}

let themeColor = document.getElementById("theme-drop-down");


themeColor.addEventListener('change', () => {
    //console.log(themeColor.value);
    if (themeColor.value === "theme-one") {
        messageOneP.style.backgroundColor = 'burlywood';
        messageThreeP.style.backgroundColor = 'burlywood';
        messageTwoP.style.backgroundColor = 'lightblue';
        messageFourP.style.backgroundColor = 'lightblue';
        messageOneP.style.color = 'black';
        messageThreeP.style.color = 'black';
    }

    if (themeColor.value === "theme-two") {
        messageOneP.style.backgroundColor = 'black';
        messageThreeP.style.backgroundColor = 'black';
        messageTwoP.style.backgroundColor = 'red';
        messageFourP.style.backgroundColor = 'red';
        messageOneP.style.color = 'white';
        messageThreeP.style.color = 'white';
    }
})

function formStuff() {
    var someStuff = document.getElementById("input").value;
    console.log(someStuff);
    var messageOne = document.createElement("div");
    var messageOneP = document.createElement("p");
    messageOne.className = "messages";
    messageOneP.className = "left";
    messageOneP.textContent = someStuff;
    messageOne.appendChild(messageOneP);
    textMessages.appendChild(messageOne);
}
