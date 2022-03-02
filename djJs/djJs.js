const square = document.getElementById("square");

// hover is Blue
// mouse held down is red
// mouse let go is yellow
// double clicked is green
// mouse scroll is orange

square.addEventListener("mouseover", function(){
    square.style.backgroundColor = "blue";
});

square.addEventListener("mousedown", function(){
    square.style.backgroundColor = "red";
});

square.addEventListener("mouseup", function(){
    square.style.backgroundColor = "yellow";
});

square.addEventListener("dblclick", function(){
    square.style.backgroundColor = "green";
});

window.addEventListener("wheel", function(){
    square.style.backgroundColor = "orange";
});


document.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === "b"){
        square.style.backgroundColor = "blue";
    }
    if (event.key ==="r"){
        square.style.backgroundColor = "red";
    }
    if (event.key === "y"){
        square.style.backgroundColor = "yellow";
    }
    if (event.key === "g"){
        square.style.backgroundColor = "green";
    }
    if (event.key === "o"){
        square.style.backgroundColor = "orange";
    }
});

