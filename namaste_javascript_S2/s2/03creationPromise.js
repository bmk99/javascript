//  creation phase
//  consuming phase

const cart = ["shoes", "shirts", "belt"]; // check for  gettign the orderId

// check
// const cart =[] // check for reject a error

const result = createOrder(cart);
console.log(result);
// consuming phase

result
  .then(function (orderId) {
    console.log("1.creted successfully -> ", orderId);
    return orderId;
  })
  .then(function (orderId) {
    console.log('going to 2.proceedtopayment')
    return proceedToPayment(orderId);
  })
  .then(function (data) {
    console.log(`2.Payment succesful for the orderId  ${data.orderId}
                   Amount  =  ${data.paymentInfo}`);
    console.log("going to 3.show order summary")
    return showOrderSummary(data);
  })
  .catch(function (error) {
    console.log("err", error.message);
  })
  .then(function (data){
    console.log(`'3.Summary 
        order id : ${data.orderId}
        amount : ${data.paymentInfo}
        payment : ${data.status}
        expected : ${data.expected}
         '`)
    console.log('going to 4.walledt')
    return updateWallet(data)
  })
  .then(function (balance){
    console.log(`Balance amount  ${balance}`)
    console.log('katham')

  })
  .catch(function (error) {
    console.log("err", error.message);
  });




// creation phase
function createOrder(cart) {
  const prom = new Promise(function (resolve, reject) {
    // validate the cart

    if (!ValiditeCart(cart)) {
      const err = new Error("not valid");
      reject(err);
    }

    //  creating the order
    let orderId = 231212; // we are getting from the db
    // check
    // let orderId = ""

    if (orderId) {
      // after 5 sec it will log the value
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    } else {
      const err = new Error("no id found");
      reject(err);
    }
  });

  return prom;
}

function proceedToPayment(orderId) {
  const prom = new Promise(function (resolve, reject) {
    let paymentStatus = true;
    let paymentInfo = 600;
    let data = {orderId,paymentInfo}
    if (paymentStatus) {
      resolve(data);
    } else {
      const err = new Error("payment failed...");
      reject(err);
    }
  });
  return prom;
}

function showOrderSummary(data) {
  const { paymentInfo, orderId } = data;
  data["status"] = "successful";
  data["expected"] = findDate(new Date());
  const prom = new Promise(function (resolve, reject) {
    resolve(data);
  });
  return prom;
}

function updateWallet(data) {
  let totalamount = 1000;
  const prom = new Promise(function (resolve, reject) {
    // let paymentinfo = data.paymentInfo ? data.paymentInfo : 0
    console.log(paymentinfo)
    
    let balance = totalamount -data.paymentinfo ;
    resolve(balance);
  });
  return prom;
}

function ValiditeCart(cart) {
  return true;
}

function findDate(date) {
  date.setDate(date.getDate() + 10);
  let day = date.getDate();
  let Month = date.getMonth() + 1;
  let Year = date.getFullYear();

  return `${day}/${Month}/${Year}`;
}
