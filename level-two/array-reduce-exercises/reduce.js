const arr = [1, 2, 3]

// const result = arr.reduce(function(final, num){
//     final += num
//     return final
// })

// const result = arr.reduce(function(final, num){
//     final.toString(num)
//     return final + num
// }, [])

// console.log(result)

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// const voteCount = voters.reduce(function(final, voter){
//     if(voter.voted){
//         final++
//     }

//     return final
// }, 0)

// console.log(voteCount)

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ]

// const totalCost = wishlist.reduce(function(final, item){
//     final += item.price
//     return final
// }, 0)

// console.log(totalCost)

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]

// const newArr = arrays.reduce(function(final,item){
//     return final.concat(item)
// }, [])

// console.log(newArr)

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const voteResults = voters.reduce(function(final, voter){
    if(voter.voted){
        if(voter.age < 26){
            final.numYoungVotes++
            final.numYoungPeople++
        }

        else if(voter.age < 36){
            final.numMidVotes++
            final.numMidPeople++
        }

        else if (voter.age < 56){
            final.numOldVotes++
            final.numOldPeople++
        }
    } 
    
    else if(!voter.voted){
        if(voter.age < 26){
            final.numYoungPeople++
        }

        else if(voter.age < 36){
            final.numMidPeople++
        }

        else if (voter.age < 55){
            final.numOldPeople++
        }
    }
    return final
}, { numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, numMidPeople: 0, numOldVotes: 0, numOldPeople: 0 })

console.log(voteResults)