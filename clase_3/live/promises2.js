// Ejemplo 1

const firstExample = () =>
  new Promise((resolve, reject) => {
    resolve(20);
  });

firstExample()
  .then((value) => value + 1)
  .then((value) => value * 2)
  .then((value) => value * 2)
  .then((value) => {
    if (value == 22) throw "Error";
    else return 80;
  })
  .then((x) => 30)
  .then((x) => x / 2)
  .then(console.log)
  .catch(console.error);

// Ejemplo 2

const secondExample = () =>
  new Promise((resolve, reject) => {
    resolve(10);
  });

secondExample()
  .then((x) => x + 1)
  .then((x) => x * 2)
  .then((x) => {
    if (x == 22) throw "Error";
    else return 80;
  })
  .then((x) => 30)
  .then((x) => x / 2)
  .then(console.log)
  .catch(console.error);
// Ejemplo 3

const thirdExample = () =>
  new Promise((resolve, reject) => {
    reject(30);
  });

thirdExample()
  .then((x) => x + 1)
  .then((x) => x * 2)
  .then((x) => {
    if (x == 22) throw "Error";
    else return 80;
  })
  .then((x) => 30)
  .then((x) => x / 2)
  .then(console.log)
  .catch(console.error);
