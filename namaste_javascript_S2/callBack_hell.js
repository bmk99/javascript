// n - not a call back
// function callBack(arr1){
//     // let arr = arr1
//     return function callBack2(arr1){
//         return function callBack3(arr1){
//             return arr1.map(arr=> arr*2)
//         }
//     }
// }

// const result = callBack([1,2,3,4])
// const result2 = result([1,2,3,4,5])
// // const result3 = result2([1,2,4])

// -----------------------------

//
// function callBack(name) {
//   console.log(name)
//   // return name;
// }
// function calculator(name, callBack) {

//   return callBack(name);
// }

// const finalData =calculator("kiran", callBack);

// n simple way of callback

// function doStep1(init, callbackCame) {
//   const result = init + 1;
//   callbackCame(result);
// }

// function callbackCall(final) {
//   console.log(`result: ${final}`);
// }

// function doOperation() {
//   doStep1(0, callbackCall);
// }

// doOperation();

// n compressed way of calling

function doStep1(init, callbackCame) {
  const final = init + 1;
  callbackCame(final);
}

function doOperation() {
  doStep1(0, (final) => {
    console.log(`result: ${final}`);
  });
}

doOperation();

// n complicated callback

// function doStep1(init, callback) {
//   const result = init + 1;
//   callback(result);
// }

//   function doStep2(init, callback) {
//     const result = init + 2;
//     callback(result);
//   }

//   function doStep3(init, callback) {
//     const result = init + 3;
//     callback(result);
//   }

// function doOperation() {
//   doStep1(0, (result1) => {
//     doStep2(result1, (result2) => {
//       doStep3(result2, (result3) => {
//         console.log(`result: ${result3}`);
//       });
//     });
//   });
// }

// doOperation();






