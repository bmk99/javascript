// console.log('first 1')
// process.nextTick(()=>{
//     console.log('insid the process.next..')
// })
// console.log('third..2')




// -------------------

// Promise.resolve().then(()=> {
//     console.log('inside the promise')
// })
// process.nextTick(()=>{
//     console.log(`inside the nextTick que.`)
// })


// ----------
process.nextTick(()=>console.log('nextTick 1'))
process.nextTick(()=>{
    console.log('nextTick 2')
    process.nextTick(()=>console.log(`inside the nextTick2`))
})
process.nextTick(()=>{
    console.log('nextTick 3')
})


Promise.resolve().then(()=>console.log('Promise 1'))
Promise.resolve().then(()=>{
    console.log(`promise 2`)
    process.nextTick(()=>{
        console.log(`inside the promise 2- nextTick`)
    })
})
Promise.resolve().then(()=>console.log('Promise 3'))






const promise = new Promise((resolve, reject) =>{
    resolve("hello") 
    reject("hello ")

})
promise.then((data) => console.log(data)).catch((err) => console.log(err)) 