const numbers = [1, 2, 3, 4, 5]

let someIsEven = false

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (number % 2 === 0) {
//         someIsEven = true
//         break
//     }
// }

someIsEven = numbers.some(item => item % 2 === 0)

console.log(someIsEven);

const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
]

console.log(orders.some(item => !item.delivered));