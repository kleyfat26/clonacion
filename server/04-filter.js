const words = ["spray", "limit", "elite", "exuberant"];
const newArray = [];
for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length >= 6) {
        newArray.push(word);
    }
}

console.log("words", words);
console.log("newArray", newArray);

const filterWords = words.filter(item => item.length >= 6);
console.log("filterWords", filterWords);

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

const ordersFilter = orders.filter(item => item.delivered && item.total >= 100);
console.log("orders", orders);
console.log("ordersFilter", ordersFilter);

const search = (query) => orders.filter(item => item.customerName.includes(query));


console.log(search("a"));