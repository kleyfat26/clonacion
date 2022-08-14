const numbers = [1, 2, 3, 4, 5, 6]
let search = undefined;
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (number === 22) {
//         search = number
//         break
//     }
// }

search = numbers.find(number => number === 34)

console.log(search);

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

search = products.find(p => p.name === "Hot dog")
console.log(search);
search = products.findIndex(p => p.name === "Hot dog")
console.log(search);