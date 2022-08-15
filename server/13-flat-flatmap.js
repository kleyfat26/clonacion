const matriz = [
    [1, 2, 3, [1, 2, 3, 4, 5, 6]],
    [4, 5, 6],
    [7, 8, 9],
]

let nuevoArray = []

// for (let i = 0; i < matriz.length; i++) {
//     const subMatriz = matriz[i];
//     for (let j = 0; j < subMatriz.length; j++) {
//         const number = subMatriz[j];
//             nuevoArray.push(number)
//     }
// }

nuevoArray = matriz.flat(3)

console.log(nuevoArray);

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
]

// const userAttributes = users.map(u => u.attributes).flat()
const userAttributes = users.flatMap(u => u.attributes)
console.log(userAttributes);

const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

const algo = Object.keys(calendars)
    .flatMap(k => {
        return calendars[k].flatMap(c => c.startDate)
    })

console.log(algo);