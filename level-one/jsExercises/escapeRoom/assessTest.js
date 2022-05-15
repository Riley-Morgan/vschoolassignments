
function getNumberOfVowels(str){
    // let vowelArray = [];
    let totalVowels = 0
    for(let i = 0; i < str.length; i ++){
        if( str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' ||str[i] == 'u'){
            // console.log(str[i]);
            // vowelArray.push(str[i]);
            totalVowels++
        }
    }
    // return vowelArray.length
    return totalVowels
}


console.log(getNumberOfVowels("hello world"));
// console.log(vowelArray.length);
// let names = ["Jerry", "Adam"]

// const person = { 
//     firstName: "Robert", 
//     lastName: "Jones", 
//     age: 37 
//  }

//  names.push(person.firstName);

