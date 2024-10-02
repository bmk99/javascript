const fs = require("fs")

//  ---exp1 
// // due to setimeout in 0 millisecons the output was inconsitent... 

// fs.readFile(__filename,()=>{
//     console.log('reading the file')
// })

// setTimeout(()=>console.log('setTimeout 1'), 0)


//  -----exp2

setTimeout(()=>console.log('setTimeout 1'), 0)

fs.readFile(__filename,()=>{
    console.log('reading the file')
})
Promise.resolve().then(()=> console.log("promise1"))
process.nextTick(() => console.log('process...'))

