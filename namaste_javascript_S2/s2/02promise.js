//
// simple example

const api = "https://randomuser.me/api/?results=2";

const result = fetch(api);
console.log(result);
result
  .then((data) => {
    console.log(data);
    return data.json();
  })
  .then((data) => {
    console.log(data);
  });

console.log("----------");

function getUsers() {
  const res = fetch("https://randomuser.me/api/?results=2");

  res
    .then((results) => {
      console.log(results);
      return results.json();
    })
    .then((data) => {
      console.log(data);
      // Access your data here
    });
}

getUsers();

console.log("-------");
// disadvantages of call back
// callback hell
// inversion controll

//| normal imaginary expample of callbackehell


