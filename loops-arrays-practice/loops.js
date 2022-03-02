var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

// for(var i = 0; i < officeItems.length; i++){
//     if(officeItems[i] === "computer"){

//         console.log(officeItems.length)
//     }
    
// }

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

//   for( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
//       if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18){
//           console.log("old enough")
//       }

//       if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
//           console.log("not old enough")
//       }
//   }

//   for( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
//       if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18){
//           console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +  " is old enough")
//       }

//       if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
//           console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")
//       }
//   }

for( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18) {

        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){

                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +  " is old enough. HE'S good to see Mad Max Fury Road.")

        }

        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +  " is old enough. SHE'S good to see Mad Max Fury Road.")
        }
    }

    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){

            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +  " is not old enough to see Mad Max Fury Road. Don't let HIM in.")

    }

    if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +  " is not old enough to see Mad Max Fury Road. Don't let HER in.")
    }
        
    }
}