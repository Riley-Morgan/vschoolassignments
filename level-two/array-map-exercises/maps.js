// const arr = [2,5,100]

// const result = arr.map(function(num){
//     return num + num
// })

// console.log(result)

// const arr = [2,5,100]

// const result = arr.map(function(num){
//     return num.toString()
// })

// console.log(result)

// let arr = ['john', 'JACOB', 'jinGleHeimer', 'schmidt']

// arr = arr.map(x => x.toLowerCase())
// arr = arr.map(x => x.charAt(0).toUpperCase() + x.substring(1))


// console.log(arr)

const arr = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

// const result = arr.map(function(person){
//     return person.name
// })

// console.log(result)

// newArr = arr.map(function(person){
//     if(person.age > 18){
//         return person.name + " can go to The Matrix"
//     }

//     else{
//         return person.name + " is under age!!"
//     }
// })

// console.log(newArr)

newH1 = '<h1>'
newH2 = '<h2>'

newArr = arr.map(function(person){
    return newH1 + person.name + newH1 + newH2 + person.age + newH2
})

console.log(newArr)