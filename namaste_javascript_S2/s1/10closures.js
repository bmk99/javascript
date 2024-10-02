let a1 = 203
function afun() {
    console.log('ehllo')


    function bfun() {
        console.log(a)
        console.log('hell')
    }
    a = 403
    return bfun;
}
const cfun = afun() 
console.log(cfun)
cfun()

