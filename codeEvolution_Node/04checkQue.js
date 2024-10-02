
const fs = require('fs')

// exp1 
// setTimeout(() => console.log("setTimeout 1"), 0);

// fs.readFile(__filename, () => {
//   console.log("reading the file");
//   setImmediate(() => console.log("inside the read.. setImemdiate-> check queue"));
//   Promise.resolve().then(() => console.log("inside the readpromise1"));
//   process.nextTick(() => console.log("inside the read .process...1"));
// });
// Promise.resolve().then(() => console.log("promise1"));
// process.nextTick(() => console.log("process..."));


// exp2 

// setTimeout(() => console.log("setTimeout 1"), 0);
// setTimeout(() => {
//     console.log("setTimeout 2")
//     Promise.resolve().then(() => console.log("inside the readpromise1"));
//     process.nextTick(() => console.log("inside the read .process...1"));
    
// }, 0);
// setTimeout(() => console.log("setTimeout 3"), 0);


// exp3 
// setTimeout(() => console.log("setTimeout 1"), 0);
// setImmediate(()=>console.log('set immediate'))

// // we can't gurantee the order..

// exp4

// but  we can gurantee the order..if we add some time consuming things like for loop  ? recheck ......
setTimeout(() => console.log("setTimeout 1"), 0);
setImmediate(()=>console.log('set immediate'))

for(let i =0;i<2000;i++){}




