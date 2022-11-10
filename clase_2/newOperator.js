//const { Person } = require("./clases");
const Person = require("./clases");

const person = new Person("Juan", "Jimenez");
console.log(`Hola ${person.getFirstname()} ${person.getLastname()}`);
