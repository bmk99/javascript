let funcInterval = () => {
  let intervalId = setInterval(() => {
    console.log("interval");
  }, 1000);
  console.log("inside ", { intervalId });
  return intervalId;
};
let intervalId = funcInterval();
console.log({ intervalId });

// error check .. it will stops the below code execution
// setImmediate(()=>{
//     console.log('immediateId')
// })

let timeoutId = setTimeout(() => {
  console.log("timeout");

  clearInterval(intervalId);
}, 5001);

console.log({ timeoutId });

let timeoutId2 = setTimeout(() => {
  console.log("2nd timeout");
  clearInterval(intervalId);
  clearTimeout(timeoutId);
}, 5000);
console.log({ timeoutId2 });

setImmediate(() => {
  console.log("immediateId");
});

// console.log({immediateId})
// console.log({ intervalId });
