//  exp2 
// setTimeout(()=>{ console.log(`setTimeout 1`)},0)
// setTimeout(()=>{ console.log(`setTimeout 2`)},0)
// setTimeout(()=>{ console.log(`setTimeout 3`)},0)

// process.nextTick(()=>console.log('nextTick 1'))
// process.nextTick(()=>{
//     console.log('nextTick 2')
//     process.nextTick(()=>console.log(`inside the nextTick2`))
// })
// process.nextTick(()=>{
//     console.log('nextTick 3')
// })


// Promise.resolve().then(()=>console.log('Promise 1'))
// Promise.resolve().then(()=>{
//     console.log(`promise 2`)
//     process.nextTick(()=>{
//         console.log(`inside the promise 2- nextTick`)
//     })
// })
// Promise.resolve().then(()=>console.log('Promise 3'))


//  exp3 

setTimeout(()=>{ console.log(`setTimeout 1`)},0)
setTimeout(()=>{ 
    console.log(`setTimeout 2`)
    Promise.resolve().then(() => console.log('inside the setTimeout 2 , Promise')) 
    process.nextTick(()=>console.log(`inside the SetTimeout 2 , nextTick`))
},0)
setTimeout(()=>{ console.log(`setTimeout 3`)},0)

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
    Promise.resolve().then(()=>console.log('inside the promise 2, Promise'))
})
Promise.resolve().then(()=>console.log('Promise 3'))
