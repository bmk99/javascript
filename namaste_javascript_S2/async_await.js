// in async function always return the promise if we return the new promise then it will not wrap
// indirectly it will wrap the promise

const normalp = new Promise((resolve, reject) => {
  resolve("promise from the function");
});

async function getData() {
  return "promise from the async";
}

//  normalP was a promise inside the async if it was returning the promise then it wouldn't agian return the promise
// if not only it will return  diff between the getData() and getData@()

async function getData2() {
  return normalp;
}

const data = getData();
const data2 = getData2();

// we are getting the promise state not the value
console.log(data);
console.log(data2);

// for getting values we need to call the .then again instead we can dierectly get the values by using the await
data.then((val) => {
  console.log({ val });
});
data2.then((val2) => {
  console.log({ val2 });
});

// -----------------------------

// n with async and awit compare the diff between two

const normalp1 = new Promise((resolve, reject) => {
  resolve("promise from the function using awiat");
});

async function getData3() {
  const res = await normalp1;
  console.log(res);
  return res;
}

const data3 = getData3();
console.log(data3);
console.log("----------------");
