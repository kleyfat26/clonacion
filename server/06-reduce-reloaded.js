const items = [1, 3, 2, 3]
const response = items.reduce((prev, curr) => {
    if (!prev[curr]) {
        prev[curr] = 1
    } else {
        prev[curr] = prev[curr] + 1
    }

    return prev;
}, {})

console.log(response);