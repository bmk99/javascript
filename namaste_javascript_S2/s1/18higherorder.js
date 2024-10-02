//  a function which can takes function as a argument then it can called as higher order function

function x() {
  
  console.log("hell");
}

// to find the area  of the circle having radius ..
const radius = [3, 2, 1, 5, 6];

function area(radius) {
  let res = [];
  for (let i = 0; i < radius.length; i++) {
    res.push(Math.PI * radius[i] ** 2);
  }
  return res;
}
console.log(area(radius));

// for calculating circumferemce
function circumferemce(radius) {
  let res = [];
  for (let i = 0; i < radius.length; i++) {
    res.push(2 * Math.PI * radius[i]);
  }
  return res;
}
console.log(circumferemce(radius));
// calculate the daimeter

function daimeter(radius) {
  let res = [];
  for (let i = 0; i < radius.length; i++) {
    res.push(2 * radius[i]);
  }
  return res;
}
console.log(daimeter(radius));

//  we need to dry principle for the calcualting above we are repeating so much
console.log("----------");
const area1 = (i) => Math.PI * i ** 2;
const circumferemce1 = (i) => 2 * Math.PI * i;
const daimeter1 = (i) => 2 * i;
function calculate(radius, logic) {
  let out = [];
  for (let k of radius) {
    out.push(logic(k));
  }
  return out;
}
console.log(calculate(radius, area1));
console.log(calculate(radius, circumferemce1));
console.log(calculate(radius, daimeter1));

// console.log(calculate(radius))
// console.log(calculate(radius))
