const numbers = [1, 2, 3, 4, 5, 6]

// const newArray = []

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     newArray.push(number * 2);
// }

const newArray = numbers.map(number => number * 2)

console.log(numbers);
console.log(newArray);
