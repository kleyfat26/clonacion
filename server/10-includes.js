const pets = ["cat", "dog", "bat"]

let includeInArray = false

// for (let i = 0; i < pets.length; i++) {
//     const pet = pets[i];
//     if (pet === "cat") {
//         includeInArray = true
//     }
// }

includeInArray = pets.includes("cat")



console.log(includeInArray);