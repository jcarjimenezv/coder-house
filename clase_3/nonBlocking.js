const fs = require("fs");
fs.readFile("../README.md", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("Esto deberia escribirse primero");
const suma = (a, b) => a + b;
console.log("2. El resultado es: " + suma(23456677777, 27282828282));

const resta = (a, b) => a - b;
console.log("3. El resultado es: " + resta(250000, 13000));
