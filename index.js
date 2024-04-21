// let x = [1, 2, 5, 6, 8, 7, 9]
// let y = [0, 3, 5, 8, 7, 9, 4]

// 261
// let avg = 0
// let sum = 0
// for(let i = 0; i < x.length; i++){
// avg +=x[i] / x.length
// }

// let avg2 = 0
// let z = y.forEach(function(item, index){
//     avg2 += item / y.length  
// })

// sum = avg * avg2
// console.log(sum);



// 262

// let avg = 0
// let sum = 0
// let avg2 = 0
// for(let i = 0; i < x.length; i++){
// avg += x[i] * x[i] / x.length
// }

// for(let i = 0; i < y.length; i++){
//     avg2 += y[i] * y[i] / y.length
//     }

//     sum = avg + avg2
//     console.log(sum);



// 263
// let x = [1, -7, -1, 2, 5, 6, 8, 7, 9]
// let y = [0, 3, -5, -1, 5, 8, 7, 9, 4]

// let count = 0
// let sum = 0
// let count2 = 0

// let z = x.forEach(function(item, index){
// if(item > 0){
//    count++
// }
// })


// let a = y.forEach(function(item, index){
//     if(item > 0){
//         count2 ++
//     }
//     })

//     sum = count + count2
//     console.log(sum);



// 264
// let x = [1, -7, -1, 2, 5, 6, 8, 7, 9]
// let y = [0, 3, -5, -1, 5, 8, 7, 9, 4]

// let count = 0
// let sum = 0
// let count2 = 0

// let z = x.forEach(function(item, index){
// if(item < 0){
//    count++
// }
// })


// let a = y.forEach(function(item, index){
//     if(item < 0){
//         count2 ++
//     }
//     })

//     sum = count + count2
//     console.log(sum);


// 265 pahanj ???
// let x = [1, -7, -1, 2, 5, 6, 8, 7, 9]
// let y = [-2, 3, -5, -1, 5, 8, 7, 9, 4]
// let count = 0
// let sum = 0
// let count2 = 0

// let z = x.forEach(function(item, index){
//    count += item
// })
// let a = y.forEach(function(item, index){
//     count2 *= item
//  })



// 266

// let x = [1, -7, -1, 2, 5, 6, 8, 7, 9]
// let y = [-2, 3, -5, -1, 5, 8, 7, 9, 4]
// let count = 0
// let sum = 0
// let count2 = 0

// let z = x.forEach(function(item, index){
//     if(item  % 2 !== 0){
//    count += item
//     }
// })
// console.log(count);
// let a = y.forEach(function(item, index){
//     if(item % 2 === 0){
//         count2 += item
//          }
//  })
// console.log(count2);
//  sum = count - count2
//  console.log(sum);


// 267

let x = [1, -7, -1, 2, 5, 6, 8, 7, 9]
let y = [-2, 3, -5, -1, 5, 8, 7, 9, 4]
let count = 0
let sum = 0
let count2 = 0

let z = x.forEach(function(item, index){
    if(item  % 7 === 0){
   count ++
    }
})
console.log(count);
let a = y.forEach(function(item, index){
    if(item % 7 === 0){
        count2 ++
         }
 })
console.log(count2);
 sum = count - count2
 console.log(sum);