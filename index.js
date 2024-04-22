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

// 265
// let x = [1, -7, -1, 2, 5, 6, 8, 7, 9]
// let y = [-2, 3, -5, -1, 5, 8, 7, 9, 4]
// let count = 0
// let sum = 0
// let count2 = 0

// let z = x.forEach(function(item, index){
//    count += item
// })
// let a = y.forEach(function(item, index){
//     if(item > 0){
//     count2 *= item
//     }
//  })

//  sum = count / count2
//  console.log(sum);

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

// let x = [1, -7, -1, 2, 5, 6, 8, 7, 9]
// let y = [-2, 3, -5, -1, 5, 8, 7, 9, 4]
// let count = 0
// let sum = 0
// let count2 = 0

// let z = x.forEach(function(item, index){
//     if(item  % 7 === 0){
//    count += item
//     }
// })
// console.log(count);
// let a = y.forEach(function(item, index){
//     if(item % 7 === 0){
//         count2 += item
//          }
//  })
// console.log(count2);
//  sum = count + count2
//  console.log(sum);

// 268

// let x = [1, -7, -1, 2, 5, 6, 8, 7, 9]
// let y = [-2, 3, -5, -1, 5, 8, 7, 9, 4]
// let count = 0
// let sum = 0
// let count2 = 0

// let z = x.forEach(function(item, index){
//     if(item  % 7 === 0){
//    count ++
//     }
// })
// console.log(count);
// let a = y.forEach(function(item, index){
//     if(item % 7 === 0){
//         count2 ++
//          }
//  })
// console.log(count2);
//  sum = count + count2
//  console.log(sum);

// 269

// let x = [1, -7, -1, 2, 5, 6, 8, 7, 9]
// let y = [-2, 3, -5, -1, 5, 8, 7, 9, 4]
// let count = 0
// let sum = 0
// let count2 = 0

// let z = x.forEach(function(item, index){
//     if(item  % 2 === 0){
//    count ++
//     }
// })
// console.log(count);
// let a = y.forEach(function(item, index){
//     if(item % 2 !== 0){
//         count2 ++
//          }
//  })
// console.log(count2);
//  sum = count + count2
//  console.log(sum);

// 270

// let x = [1, -7, -1, 2, 5, 6, 8, 7, 9]
// let y = [-2, 3, -5, -1, 5, 8, 7, 9, 4]
// let count = 0
// let sum = 0
// let count2 = 0

// let z = x.forEach(function(item, index){

//    count += item * item

// })
// console.log(count);
// let a = y.forEach(function(item, index){

//         count2 += item * item

//  })
// console.log(count2);
//  sum = count + count2
//  console.log(sum);

// 271

// let list = ['a', 'v', 6, 'f', 'a', 'h', 't', 'p']
// let count = 0
// let result = list.forEach(function(item, index){
//     if(item === 'a'){
//         count++
//     }
// })
// console.log(count);

// 272

// let list = ['a', 'v', 6, 'f', 'a', 'h', 's', 's', 'p']
// let count = 0
// let t = false

// for(let i = 0; i < list.length; i++){
//     if(list[i] === 'b'){
//         count++
//     }
//     if(list.length / 2 === count){
//         t = true
//     }else{
//         t = false
//     }
// }
// console.log(t);

// 273

// let list = ['a', 'v', 6, 'f', 'a', 'h', 's', 's', 'p']
// let count = 0
// for(let i = 0; i < list.length; i++){
//     if(list[i] === 's'){
//         count += i
//     }
// }
// console.log(count);

// 274

// let list = ['a', 'v', 6, 'f', 'a', 'h', 's', 's', 'p']
// let count = 0
// for(let i = 0; i < list.length; i++){
//     if(typeof list[i] === 'string' && list[i] > 'h'){
//         count += i / i
//     }
// }
// console.log(count);

//275

// let list = ['a', 'v', 6, 'f', 'a', 'h', 's','k', 's', 'p']
// let count = 0
// for(let i = 0; i < list.length; i++){
//     if(typeof list[i] === 'string' && list[i] < 'k'){
//         count++
//     }
// }
// console.log(count);

// 276

// let list = ["a", "v", 6, "r", "p", "h", "s", "k", "s", "p"];
// let count = 0;
// let t = false;
// for (let i = 0; i < list.length; i++) {
//   if (typeof list[i] === "string" && list[i] === "r") {
//     t = true;
//     break;
//   }
// }
// console.log(t);



// 277 ???

// let list = ["a", "v", 6, "r", "p", "h", "s", "k", "s", "p"];

// let result = list.filter(function(item, index){
//     return typeof item === "string" && item > "k"
// })
// console.log(result);



// 278

// let list = ["a", "v", 6, "r", "p", "h", "s", "k", "s", "p"];
// console.log(list);
// let result = list.filter(function(item, index){
//     return typeof item === "string" && index % 2 !== 0
// })
// console.log(result);



// 279 ???

// let list = ["a", "v", 6, "r", "p", "h", "s", "k", "s", "p"];
// console.log(list);
// let result = list.filter(function(item, index){
//     return typeof item === "string" && item > 'k'
// })
// console.log(result);



// 280 ???? inchi chi verjis avelanum f bayc hamapatasxanum e pahanjin lucum@

// let list = ["a", "v", "f", "r", "p", "h", "f", "k", "s", "p"];
// console.log(list);
// let newList = [];
// for (let i = 0; i < list.length; i++) {
//     newList.push(list[i])
//     if (typeof list[i] === "string" && list[i] === 'f') {
//         newList.push('f')
//     }
// }
// console.log(newList);

