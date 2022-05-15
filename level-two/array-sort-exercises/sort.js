// const arr = [1, 3, 5, 2, 90 ,20]

// arr.sort(function(a, b){
//     return a - b
// })

// console.log(arr)

// const arr = [1, 3, 5, 2, 90 ,20]

// arr.sort(function(a, b){
//     return b - a
// })

// console.log(arr)

// arr = ['dog', 'wolf', 'by', 'family', 'eaten']

// arr.sort(function(a, b){
//     return a.length - b.length
// })

// console.log(arr)

// arr.sort()

// console.log(arr)

arr = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

arr.sort(function(a, b){
    return a.age - b.age
})

console.log(arr)