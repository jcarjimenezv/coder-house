// Introdujo el poder crear variables de tipo let y const
const constant = Math.PI 
console.log(constant);
//constant = 1
let firstName = "Juan"
console.log(firstName);
firstName = "Pedro"
console.log(firstName);

function get(params) {
    console.log('Hola soy:' + firstName);
}
get()
// Arrow functions o funciones flecha
const arrowFunction = (firstName) => console.log('Hola soy:' + firstName);

arrowFunction(firstName)

// Class para creación de clases con constructores
class Person {
    constructor(){}
}

// funcion con parametros default
const newFunction = (firstName = "Juan")=> console.log("Valor parametro: "+ firstName);
newFunction(); // Si no se envia el parametro toma el valor por default
newFunction(firstName); // En este caso toma el valor del parametro enviado a la funcion

// Array.find()

const fruitsList = ["Naranja", "Mango", "Mora", "Manzana"]
const fruit = fruitsList.find(fruit => fruit === "Mora")
console.log("Fruta encontrada: "+ fruit)

// Template strings `${}`
const curso = 'Programación Lineal'
console.log(`Hola mi nombre es ${firstName} 


y los acompañare en este curso de ${curso}`)
