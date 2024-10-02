// n - promise

// const apiUrl = 'https://jsonplaceholder.typicode.com/todos/7'

// const user = fetch(apiUrl)
// console.log(user)

// user.then((data)=>{
//     console.log(data)
//     return data.json()
// }).then(json=> console.log(json))

const cart = ["krian", "san", "ahrs"];
const final = createOrder(cart);

final
  .then((orderId) => {
    // console.log(orderId);
    return orderId;
    //    proceed to payment
  })
  .catch((err) => {
    // console.log(err)
    console.log(err.message);
    // displays the err message
  })
  .then((orderId) => {
    console.log(orderId);
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log("--",paymentInfo);
    return placedIt(paymentInfo);
  })
  .then((balance) => {
    console.log("-",balance);
  })
  .catch((err) => {
    console.log("..",err.message);
  });

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!ValiditeCart(cart)) {
      // validating the cart this was taken as the example
      const err = new Error("cart is not valid");
      reject(err);
    }

    // orderId can get by any api call
    const orderId = "2029";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId); // this orderId was passed to the final.then() callback
      }, 5000);
    }
  });
  return pr;
}
function ValiditeCart(cart) {
  return true;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("payments succesful");
  });
}

function placedIt(paymentInfo) {
  return new Promise((resolve,reject)=>{
    resolve("balance")
  })
}

