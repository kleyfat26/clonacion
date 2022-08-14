const elements = [1, 2, 3, 4, 5]
const otherElements = [1, 2, 3, 4, 5]

let newArray = elements

// for (let i = 0; i < otherElements.length; i++) {
//     const element = otherElements[i];
//     newArray.push(element)
// }

newArray = elements.concat(otherElements)
console.log(newArray);

newArray = [...elements, ...otherElements, ..."hola"]
console.log(newArray);
