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
const nuevoArray = orders.map(item => item.total);
console.log("original", orders);
console.log("nuevo", nuevoArray);
// const nuevoArray2 = orders.map(item => {
//     item.tax = .19;
//     return item;
// })

const nuevoArray2 = orders.map(item => {
    return{
        ...item,
        tax: .19
    }
})

console.log(nuevoArray2);
console.log(orders);