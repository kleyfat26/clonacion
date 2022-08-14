const numbers = [12, 54, 2, 6, 65, 1, 24, 65, 2];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    total += number;
}

console.log(total);

const totalArray = numbers.reduce((total, number) => total + number, total)

console.log(totalArray);
