const numbers = [];
for (let i = 0; i < 30; i++) {
    numbers.push(Math.floor(Math.random() * 10) + 1)
}

const numberRange = numbers.reduce((prev, curr) => {
    if (curr >= 1 && curr <= 5) {
        prev["1-5"] = prev["1-5"] + 1;
    } else if (curr >= 6 && curr <= 8) {
        prev["6-8"] = prev["6-8"] + 1;
    } else if (curr >= 9 && curr <= 10) {
        prev["9-10"] = prev["9-10"] + 1;
    }

    return prev;
}, {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0
})

console.log(numbers);
console.log(numberRange);