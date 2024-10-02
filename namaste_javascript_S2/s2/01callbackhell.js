// disadvantages of call back
// callback hell
// inversion controll

//| normal imaginary expample of callbackehell

const cart = ["shoes", "pen", "book"];

function createOrder(cart, callback) {
  let orderId = 1;
  console.log(`1 Creating order id  = ${orderId}`);
  callback(orderId);
}

function proceedToPayment(orderId, callback) {
  console.log(`2.Proceeding to payment for orderID ${orderId}`);
  let prices = [{ shoes: 300 }, { pen: 50 }, { book: 80 }];
  let paymentinfo = 430;
  callback(orderId, paymentinfo);
}


function showOrderSummary(orderId, paymentInfo, callback) {
  console.log(`3.Showing order summary for the order id ${orderId}
                  Payment for this order = ${paymentInfo}`);
  callback(paymentInfo);
}

function updateWalletBalance(paymentInfo) {
  let totalamount = 500;
  let balance = totalamount - paymentInfo;
  console.log(`4.Balance amount in wallet is = ${balance}`);
}

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (orderId, paymentInfo) {
    showOrderSummary(orderId, paymentInfo, function () {
      updateWalletBalance(paymentInfo);
    });
  });
});
