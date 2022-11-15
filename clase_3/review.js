function name() {
  // your code here
}

const getName = () => {
  // your code here
};

(() => {
  // your code here
})();

function isInScope() {
  try {
    const x = 0;
    if (x === 0) {
      const x = 1;
      const j = 0;
      console.log("X: " + x);
      console.log("J: " + j);
    }
    console.log("J2: " + j);
  } catch (error) {
    console.error("Error: ", error);
  }
}

isInScope();

//Closure

calculate = (a, b, operand, result = 0) => {
  const displayResult = message => {
    if(operand === "+"){
        result = addition(a, b);
    }else if(operand === "-"){
        result = subtraction(a, b);
    }else {
        result = addition(a, b);
    }
    console.log(`${message} ${result}`)
  }
  const addition = (a, b) => a + b;
  const subtraction = (a, b) => a - b;
  displayResult('The result is');
}
calculate(8, 3, "/");

class Persona {
    constructor(name,lastname, age){
        this.name = name
        this.lastname = lastname
        this.age = age
    }
    getName = () => this.name 
    getLastname = () => this.lastname
    getAge = () => this.age
    printValues = () => console.log(`Nombre: ${this.name} Apellido: ${this.lastname} Edad: ${this.age}`)
}

const person = new Persona("Juan", "Jimenez", 34)
person.printValues();
