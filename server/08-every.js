const numbers = [1, 3, 2]

let everyIsOdd = true;

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (number % 2 === 0) {
//         everyIsOdd = false
//         break
//     }
// }

everyIsOdd = numbers.every(item => !(item % 2 === 0))

console.log(everyIsOdd)

const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 18,
    },
];

console.log(team.every(t => t.name.includes("a")));