const names = ["Fernando", "Patrick", "Astrid", "Cesar", "Andrea", "Manu"]

names.sort();

const numbers = [4, 2, 3, 7, 32, 2676, 13, 676, 2]

numbers.sort((a, b) => a - b)

console.log(names);
console.log(numbers);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

orders.sort((a, b) => {
    return a.total - b.total
})

console.log(orders);