
function filterAnagrams(arr, target) {
    const newTarget = target.split("").sort().join("")
    
    return arr.filter(word => {
      return word.split("").sort().join("") === newTarget
      
    })
  
  }
  
  const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
  const target = 'enlist';
  
  const anagrams = filterAnagrams(words, target);
  console.log(anagrams); // Output: ['listen', 'silent']
  
  /*
  1. SPLIT TARGET STRING INTO INDIVIDUAL LETTERS
  2. SORTED LETTERS ALPHABETICALLY
  3. JOINED LETTERS BACK TOGETHER INTO A STRING
  4. REPEATED STEPS 1-3 FOR EACH WORD IN THE WORDS ARRAY
  5. USED A FILTER METHOD TO COMPARE EACH NEWLY REARANGED WORD TO THE 
  TARGET WORD
  6. IF THE NEW WORD MATCHES THE TARGET, THEN IT IS ADDED TO THE 
  ANAGRAMS ARRAY
  */

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  function sortByMultipleCriteria(people) {
    const sortAge = people.sort((a, b) => a.age - b.age)
    console.log(sortAge)
    // const sortName = people.sort((a, b) => {
    //   const nameA = a.name.toUpperCase();
    //   const nameB = b.name.toUpperCase();
    //   if (nameA < nameB) {
    //     return -1;
    //   }
    //   else if (nameA > nameB) {
    //     return 1;
    //   }
    // })
    // console.log(sortName)
  }
  
  const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  ];
  
  const sortedPeople = sortByMultipleCriteria(people);
  
  console.log(sortedPeople);
  
  
  /*
  1. compare ages in each object within the array
  2. sort objects by the age property
  3. compare first letter of name property
  4. sort objects by alphabetical order of first letter of name
  */

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function calculateTotalPrice(products) {
  const totalCost = products.forEach((products) => (products.price * products.quantity))

  const newList = products.map(product => {
    return ({
      name: products.name,
      totalPrice: totalCost
    })
  })
}

function calculateTotalPrice(products) {
  const totalPriceArray = products.map(product => {
    return {
      name: product.name,
      totalPrice: product.price * product.quantity
    };
  });

  return totalPriceArray;
}

const products = [
  { name: 'Apple', price: 1.5, quantity: 3 },
  { name: 'Banana', price: 0.75, quantity: 5 },
  { name: 'Orange', price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]

/* 
1. find out price multiplied by quantity for each object
2. return a new array with properties name, totalprice 
Corrected the syntax error in the map function.
Fixed the arrow function syntax inside the map callback.
Used product as the parameter in the map callback to correctly refer to each element in the products array.

*/