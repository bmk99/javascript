// setTimeout(function(){
//     console.log('timer')

// },5000)

// function y() {
//   console.log("helloo");
// }
// function x(y) {
//     console.log('in x ')
//     y();
// }
// x(y)// passing function as the argument...

// // -------

// let count = 0
// document.getElementById("clickMe").addEventListener("click",function xyz(){
//     console.log('hello',++count)
// })

function addEventListenerFun() {
    console.log('what in')
    let count = 0;
document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("hello sds", ++count);
});
console.log('hellolsd')
 
}
addEventListenerFun();


function a() {
    let b =23
    return function y() {
        console.log('ehlyyy',b)
    }
    
}
a()()





// callback example 
//  to give the even numbers
// ---like noraml way of doing..
function filter_even(numbers) {
    let results = [];
    for (const n of numbers) {
      if (n % 2 === 0) results.push(n);
    }
    return results;
  }
  let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
  let numbers1 = filter_even(arr1);
  console.log({ numbers1 });
  
  
  //  for getting the odd numbers 
  
  function isOdd1(n){
      if(n%2 ==! 0)
       return true;
  }
  function filter_odd(numbers,fn){
      results =[];
      for (const n of numbers){
          if(fn(n))
              results.push(n);
          
      }
      return results;
     
  }
  let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
  let numbers2 = filter_odd(arr2,isOdd1);
  console.log({numbers2});
  
  console.log("............................................................")
  // for getting the both even and odd numbers
  

//   -- same thing by using the callback 
  function isEven1(n){
      if(n%2 === 0)
          return true;
  }
  function isOdd2(n){
      if(n%2 ==! 0)
          return true;
  }
  function filter(numbers,fn){
      let results = [];
      for(let n of numbers){
          if(fn(n))
              results.push(n);
      }
      return results;
  }
  let arr3 = [1,2,3,4,5,6,7,8]
  let numbers3 = filter(arr3,isOdd2)
  let numbers4 = filter(arr3,isEven1)
  console.log({numbers3},{numbers4})