var x = 10 
function b (){
    var a = 100
    console.log(this.x)

}
b()
console.log(window)
console.log(window === this)
console.log(window.x)
console.log(x) // by default window keyword was their 
console.log(y) // not defined..