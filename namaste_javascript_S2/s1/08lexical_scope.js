debugger;
function a(){
    var b = 1000
    c() 
    function c() {
        console.log(b)
    }
}
a()
console.log('hel')

// getting access from the parents 