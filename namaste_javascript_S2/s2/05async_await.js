// // what is aysnc and await

// ----------- inbuilt async return promise..
// // async function always returns a promise if not returned promise..

// if we ddn't returned anything. also async function will return automatically promise...
async function check(params) {
  console.log(params);
}
console.log(check("hell"));

async function greet(params) {
  return params;
}
console.log(greet("promise async.."));
let argu = "Hello world async";
greet(argu)
  .then(function (res) {
    console.log({ res });
  })
  .catch(function (error) {
    console.error(error);
  });

// --------------------------externally return a promise in async
// console.log("-----------");

// async function externalGreet(params) {
//   let prom = new Promise(function (resolve, reject) {
//     resolve(params);
//   });
//   return prom;
// }
// let data2 = "Hello external world async ";
// console.log(externalGreet(data2));
// externalGreet(data2)
//   .then(function (res) {
//     console.log({ res });
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// console.log("------------");

// -------------using await in async

// let promise1 = new Promise(function (resolve, reject) {
//   resolve("hello iam from prom awati")
// //   reject("erorrororor");
// });

// // --using await with promise
// async function getData2() {
//   try {
//     const val = await promise1;
//     console.log({ val });
//   } catch (error) {
//     console.error(error);
//   }
// }
// getData2();

// // -- without using await by normally using .then from the promise
// function getData() {
//     promise1.then(function (data){
//         console.log(data)
//     })
// }
// getData()

// -------
// -----diving deep into await , what is the difference in using await in async or normally resolving the promise..

// console.log('startttt')
// let promise1 = new Promise(function (resolve, reject) {
//     setTimeout(function(){
//         resolve("resolved from promise1 ")
//       },10000)

// //   reject("erorrororor");
// });
// console.log(promise1)
// let promise2= new Promise(function (resolve, reject) {
//     setTimeout(function(){
//         resolve("resolved from promise 2")
//       },5000)

// //   reject("erorrororor");
// });

// console.log(promise2)

// async function getData2() {
//   try {
//     const val = await promise1;
//     console.log('namaste promise1 ')
//     console.log({ val });
//     const val2 = await promise2;
//     console.log('namasthe promise2 ')
//     console.log({val2})
//   } catch (error) {
//     console.error(error);
//   }
// }
// getData2();

// // by normally resolving the promise.....

// function getData() {
//     promise1
//         .then(function (data){
//         console.log(data)
//         })
//         .catch(function(error){
//             console.error(error)
//         })
//     promise2
//         .then(function(data){
//             console.log(data)
//         })
//         .catch(function (error){
//             console.error(error)
//         })
// }
// getData()
// ----------

//  -----by doing with reallife examples..
// ---------------expamples in difference between Promise vs async/await

// exampel 1
const api = "https://api.github.com/users/bmk99";

async function handlePromise() {
  const res = await fetch(api);

  const data = await res.json();
  console.log(data);
}
handlePromise();

// example 2
const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

// ---------

async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();

promise.then((data) => console.log(data[0].name));
// --------------
