
// --example of closures...
function finalFun() {
  var c = 23823;
  function outer(b) {
    console.log(b);
    function inner() {
        let d = 64545
      console.log(a, b, c,d,e);
    }
    let  d= 234;
    return inner;
  }
  let a =234223
  let e =6345
  return outer;
}


let close = finalFun()("hello b");
close();

// or

// let close = outer("helllo");
// close();


// --- Data Privacy 

// -- wrong of Data privacy 
// var count = 0;
// function increment1(){
//     count++;
//     console.log(count)

// }

// console.log(count) /// count can accesible throught out the function 
// // to avoid this closures came in 

//  -- corect way of data privacy 

function incrementCounter() {
    let count =0;
    return function increment(){
       count++;
       console.log(count)
    }
}
let counter1 = incrementCounter()
counter1()
counter1()

let counter2 = incrementCounter() 
counter2()
counter2()

//  -- simplied correct way of data privacy using the constructor

// function Counter(){
//     let count = 0 
//     this.incrementCounter =function () {
//         count++;
//         console.log(count)
//     }
//     this.decrementCounter = function () {
//         count--;
//         console.log(count)
//     }
// }

// let counter1 = new Counter()
// counter1.incrementCounter()
// counter1.incrementCounter()
// counter1.decrementCounter()
// counter1.decrementCounter()
// let counter2 = new Counter() 
// counter2.incrementCounter()
// counter2.incrementCounter()
// counter2.decrementCounter()
// counter2.decrementCounter()


// --- disadvantages .. more memory 
function ab(){
    var a=10,z=24
    return function cd(){
        console.log(a) // debug here and try to console.log(z) in the broweser
    }
}
ab()()