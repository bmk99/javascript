const promise1  = new Promise(function (resolve,reject){
    setTimeout(function () {
        // resolve("p1 success")
        reject("p1  fail")
    },3000)
})

const promise2 = new Promise(function (resolve,reject){
    setTimeout(function () {
        // resolve('p2 success')
        reject("p2 failed....")
    },1000)

})

const promise3 = new Promise(function (resolve,reject){
    setTimeout(function () {
        resolve("p3 success")
        // reject("p3 fail")
    },2000)
})

// Note Always catch the errors don't leave unaught....
let arrPromise = [promise1,promise2,promise3]
Promise.all([promise1,promise2,promise3])
    .then(function(res){
        console.log("all", {res})
    
    })
    .catch(function(error) {
        console.error("all",error)
    })

console.log('allsettled')

Promise.allSettled(arrPromise)
            .then(function (res) {
                console.log("allSettled..",{res})
            })
            .catch(function (error) {
                console.error("allSettled",{error})
            })
console.log('any')

Promise.any(arrPromise)
            .then(function (res){
                console.log("any",{res})
            })
            .catch(function(error){
                console.error("any ",{error})
                console.log("any ",error.errors)
            })

Promise.race(arrPromise)
            .then(function(res){
                console.log("race",{res})
            })
            .catch(function(error){
                console.error("race.",{error})
            })