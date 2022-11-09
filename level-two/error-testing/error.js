try {
    if(2===2){
        throw new Error("Hey I am an error!")
    }

    console.log("Did I console log?")

}

catch(err){
    console.log(err)
}

finally {
    console.log("I am running no matter what!")
}

function sum(a, b){
    if (typeof a != 'number' || typeof b != 'number'){
        throw new Error("Where are the numbers?")
    }


    return a + b;
}

try {
    console.log(sum(1, 'f'))
}
catch(err){
    console.log(err)
}

let user = {username: "david", password: "123"}

function signIn(username, password){
    if(username === "david" || password === "123"){
        console.log("login successful")
    }
    else{
        
        throw new Error("I have never met this man before in my life...")
    }
}

try{
    console.log(signIn(user))
}

catch(err){
    console.log(err)
}