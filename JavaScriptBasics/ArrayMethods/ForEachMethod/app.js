const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // const double = num.forEach(function (el) {
// //     console.log(el)
// // })

// const double = num.map(function (al) {
//     return al * 2;
// })

// const add = (num) => {
//     return num * num;
// } 

// const greet = (asd) => {
//     console.log(asd)
// }  

// const temp = num.filter(n => {
//     return n < 5
// })


const temp = num.every(n => {
    return n % 2 === 0;
})