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

// ============================================================================================================================================
// 23.04.24

// 379 ashxatuma bayc chem patkeracnum vonc

// function foo(n){
//     let arr = []
//     let simple = false
//     for(let i = 1; i < n; i++){
//         simple = true
//         for(let j = 2; j < i; j++){
//             if(i % j === 0){
//                simple = false
//             }
//         }
//         if(simple){
//             arr.push(i)
//         }
//     }
//     console.log(arr);
// }
// foo(50)

// 380

222;
// let max = 0
// let max1 = 0
// let min = 0
// let min1 = 0
// let result = 0
// let result1 = 0

// for(let i = 0; i < x.length; i++){
//     if(x[i] > max){
//         max = x[i]
//     }
// }

// for(let i = 0; i < y.length; i++){
//     if(y[i] > max1){
//         max1 = y[i]
//     }
// }

// result = (max + max1) / 2
// console.log(result);

// for(let i = 0; i < x.length; i++){
//     if(x[i] < min){
//         min = x[i]
//     }
// }
// console.log(min);

// for(let i = 0; i < y.length; i++){
//     if(y[i] < min1){
//         min1 = y[i]
//     }
// }
// console.log(min1);
// result1 = min * min1 / 2
// console.log(result1);

// 381

// let arr = [5, 8, 1, 9, -8, 7, 2, 10]

// let result = arr.sort(function(a, b){
//     return a - b
// })
// console.log((result));

//====================================================================================================================================================

// 382 ++ stugel

// let x = [0, 4, -8, 6, 9, 7, 11];
// let y = [1, 88, -8, 6, 9, 44, 5];


// function foo() {
//   for (let i = 0; i < y.length; i++) {
//     if (x.includes(y[i])) {
//       y.splice(i, 1);
//       i--;
//     }
//   }
//   console.log(y);
// }

// foo();



// 383/384 (383 aranc break)

// let x = [0, 4, -8, 6, 9, 7, 11];
// let y = [1, 88, -8, 6, 9, 44, 5];
// let z = [];

// function foo() {
//   for (let i = 0; i < x.length; i++) {
//     if (y.includes(x[i])) {
//       z.push(x[i]);
//       break;
//     }
//   }
//   console.log(z);
// }

// foo();


// 385 ++ stuge

// let x = [0, 4, 4, 6, 9, 88, 11];
// let y = [1, 88, -8, 6, 9, 44, 5];
// let z = [];

// function foo() {
//   for (let i = 0; i < x.length; i++) {
//     if (y.includes(x[i]) && z.length < 2) {
//       z.push(x[i]);

//     }
//   }
//   console.log(z);
// }
// foo()

// 386

// function foo(x, y) {
//   let avg = 0;
//   for (let i = 0; i < y.length; i++) {
//     avg += y[i] / y.length;
//   }

//   let z = [];
//   for (let j = 0; j < x.length; j++) {
//     if (x[j] > avg) {
//       z.push(x[j]);
//     }
//   }
//   return z;
// }
// let x = [1, 88, -8, 6, 9, 44, 5];
// let y = [0, 4, 4, 6, 9, 7, 11];
// let result = foo(x, y);
// console.log(result);

// 387

// function foo(x, y) {
//   let max = 0;
//   for (let i = 0; i < y.length; i++) {
//     if (y[i] > max) {
//       max = y[i];
//     }
//   }
//   let z = [];
//   for (let j = 0; j < x.length; j++) {
//     if (x[j] > max) {
//       z.push(x[j]);
//     }
//   }
//   return z;
// }
// let x = [1, 88, -8, 6, 9, 44, 5];
// let y = [0, 4, 4, 6, 9, 7, 11];
// let result = foo(x, y);
// console.log(result);


// 388 

// function foo(x, y){
//   let min = x[0]
//   let z = []
//   for(let i = 0; i < x.length; i++){
//     if(x[i] < min){
//       min = x[i]
//     }
//   }
//     console.log(min);
//     for(let j = 0; j < y.length; j++){
//       if(y[j] < min){
//        z.push(y[j])
        
//       }
//     }
  
//   return z
// }

// let x = [11, 88, 3, 6, 9, 44, 5];
// let y = [7, 4, 2, 6, 9, 7, 1, 8];
// let result = foo(x, y);
// console.log(result);




// 389

// function foo(x, y){
//   let odd = y[0]
//   let avg = y[0]
//   let z = []
//   for(let j = 0; j < y.length; j++){
//     if(y[j] % 2 !== 0){
//         odd = y[j]
//         avg += odd / y.length
//     }
//   }
//   console.log(avg);
//   for(let i= 0; i < x.length; i++){
//     if(x[i] > avg && x[i] >= 0){
//         z.push(x[i])

//     }
//   }
//   return z
// }
// let x = [11, 88, 3, 6, 9, 44, 5];
// let y = [7, 4, 2, 6, 9, 7, 1, 8];
// let result = foo(x, y);
// console.log(result);



// 390 

// function foo(x, y){
//   let evan = y[0]
//   let avg = y[0]
//   let absolute = x[0]
//   let z = []
//   for(let j = 0; j < y.length; j++){
//     if(y[j] % 2 === 0){
//         evan = y[j]
//         avg *= evan * evan/ y.length
//     }
//   }
//   console.log(avg);
//   for(let i= 0; i < x.length; i++){
//     if(x[i] < avg && x[i] >= 0){
//         z.push(x[i])
//     }
//   }
//   return z
// }
// let x = [11, 88, 3, 6, 9, 4444, 5555];
// let y = [7, 4, 2, 6, 9, 7, 1, 8];
// let result = foo(x, y);
// console.log(result);



// 391 

// function foo(x, y){
//   let avg = y[0]
//   let z = []
 
//   for(let j = 0; j < y.length; j++){
   
//         avg *= y[j] * y[j] / y.length
    
//   }
//   console.log(avg);
//   for(let i= 0; i < x.length; i++){
//     if(x[i] < avg){
//         z.push(x[i])
   
//     }
//   }
//   return z
// }
// let x = [11, 88, 3, 6, 9, 44454,55455];
// let y = [7, 4, 2, 6, 9, 7, 1, 8];
// let result = foo(x, y);
// console.log(result);



