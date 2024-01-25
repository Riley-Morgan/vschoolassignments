// Write a function called extractUniqueCharacters that takes an array of strings and returns a new array containing only the unique characters from all the strings.

/* What do I want to do?
1. split each word in the words array into individual letters
2. Add one of each unique letter to a new array

How?
1. Check each incoming letter against all letters already in the array, only add in if it does not match
any of the letters already in the array



*/
// function extractUniqueCharacters(words) {

//   const newArray = words.join().split("")
//   let finalArray = []
//   //newArray.splice(0,2)
//   newArray.map(char => {
//     if (!finalArray.includes(char)) {
//         finalArray.push(char)
//     }
//   })
//   return finalArray
// }


// const words = ['apple', 'banana', 'cherry'];

// const uniqueChars = extractUniqueCharacters(words);

// console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']
                          //         ['a', 'b', 'c', 'e', 'h', 'l', 'n', 'p', 'r', 'y'] 

// Write a function called sortByProperty that takes an array of objects and a property name as input. The function should return a new array containing the objects sorted in ascending order based on the specified property.



// function sortByProperty(names, property) {
//   const sortPeople = names.sort((a, b) => a[property] - b[property])
//   return sortPeople
// }

// const people = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 },
//   { name: 'David', age: 28 },
// ];

// const sortedByAge = sortByProperty(people, 'age');

// console.log(sortedByAge);



function generateTable(number){
// we have number, we have * ,  = ,   factor = 1 - 10
// use combine our strings with our numbers
// for loop to get our 1 - 10
// do js calculate our result

for (let i = 1; i < 11; i++ ){
    console.log(`${number} * ${i} = ${number * i}`)
}


}

generateTable(3)

// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 10 = 30