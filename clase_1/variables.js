// Tipos de datos

// Primitivos
const firstName = "Juan"; // String
const age = 34; // number
const weight = 80.5; // float number
const isMarried = true; // boleean
const undefinedValue = undefined; // boleean
const nullValue = null;

console.log("typeof firstName: " + typeof firstName); // String
console.log(" ");
console.log("typeof age: " + typeof age); // number
console.log(" ");
console.log("typeof weight: " + typeof weight); // number
console.log(" ");
console.log("typeof isMarried: " + typeof isMarried); // boolean
console.log(" ");
console.log("typeof undefinedValue: " + typeof undefinedValue); // undefined
console.log(" ");
console.log("typeof null: " + typeof nullValue); // null
console.log(" ");

// Tipos de datos Object

//Predefinidos o Predeterminados

// Fecha Actual
const now = new Date(); 
console.log("Fecha actual: " + now);
console.log(" ");
// Expresión regular para validar que un valor solo contenga numeros
const regExp = new RegExp("^[0-9]+$"); 
console.log(
  "Testing regExp no numbers: " + regExp.test("Hola no soy un numero")
);
console.log(" ");
console.log("Testing regExp: only numbers" + regExp.test("0123456789"));
console.log(" ");
const dummyError = new Error("Dummy Error"); // Permite crear cualquier tipo de error
console.log("Imprimiendo la instancia completa de error: " + dummyError);
console.log(" ");
console.log("Imprimiendo el mensaje de error: " + dummyError.message);
console.log(" ");
console.log("Imprimiendo el stack(traza) de error: " + dummyError.stack);
console.log(" ");
console.log("Imprimiendo el name de error: " + dummyError.name);
console.log(" ");

// Object determinado por el usuario o programador
const person = {
  firstName,
  lastName: "Jimenez",
  age,
  weight,
  isMarried,
  hobbies: ["Leer", "Nadar", "Escuchar Musica", "Montar Bicicleta"],
};

//Array matrices o arreglos
const hobbies = ["Leer", "Nadar", "Escuchar Musica", "Montar Bicicleta"];

// ["Leer", "Nadar", "Escuchar Musica", "Montar Bicicleta"]
console.log("Hobbies: " + hobbies); 
console.log(" ");
// Person { firstName: 'Juan', lastName: 'Jimenez', age: 34, weight: 80.5, isMarried: true, hobbies: [ 'Leer', 'Nadar', 'Escuchar Musica', 'Montar Bicicleta' ] }
console.log("Person" + person); 
console.log(" ");
