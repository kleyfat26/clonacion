const elements = ["Fire", "Air", "Water"]

const separator = "--"

let joinElements = "";

// for (let i = 0; i < elements.length; i++) {
//     const element = elements[i];
//     joinElements += element + separator
// }

joinElements = elements.join(separator)

console.log(joinElements);

const title = "curso de introduccion a la programacion basica"

console.log(title.split(" ").join("-"));