var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

let newArr = peopleArray.filter(function(person){
    if(person.age > 18){
        return person.firstName + " " + person.lastName
    }
})

let newArr1 = newArr.sort(function(a, b){
    if(a === b){
        return 0
    }
    return a.lastName < b.lastName ? -1 : 1
})

let newArr2 = newArr1.map(function(person){
    return person.firstName + " " + person.lastName + " is " + person.age
})

let newArr3 = newArr2.map(function(person){
    return "<li>" + person + "</li>"
})

console.log(newArr3)