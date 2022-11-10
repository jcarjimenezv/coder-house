/* keyword: function*/
/* nombre: functionName*/
/* parameters a,b,c, [], {}, bool*/
/* instructions */
function functionName(
  name,
  age,
  currentDate,
  hobbies,
  isStudent,
  additionalInfo
) {
  //instructions el codigo a ejecutar
  console.log(
    `name: ${name}, age: ${age}, currentDate: ${currentDate}, hobbies: ${hobbies}, isStudent: ${isStudent}, additionalInfo: ${JSON.stringify(additionalInfo)}`
  );
  //Return opcional
}
/*invoke*/
functionName("Juan", 34, new Date(), ["Leer", "MTB"], false, { hasChildren: true, isMarried: true });

// Buenas practicas - good practices
// Representar la acción a ejecutar
// Good
function printName(name) {
  console.log(`Name: ${name}`)
}
//Not good
function name(name) {
  console.log(`Name: ${name}`)
}

// CamelCase
// Good
function printName(name) {
  console.log(`Name: ${name}`)
}
//Not good
function PrintName(name) {
  console.log(`Name: ${name}`)
}

// SRP- Single Responsibility
// Good
function getFirstname() {
  return 'Juan'
}
//Not good
function getFirstname() {
  const firstname = 'Pedro'
  const lastname = 'Infante'
  return `${firstname} ${lastname}`
}

// Dont be explicit
// Good
function getFullnameByDocument(documentNumber) {
  if(documentNumber){
    const firstname = 'Pedro'
  const lastname = 'Infante'
  return `${firstname} ${lastname}`
  }
  return 'No existe'
  
}
//Not good
function getFirstNameAndLastNameByDocumentNumber(documentNumber) {
  
}


// No recomendada
const greetings = new Function("return 'Hola';");
greetings (); // 'Hola'


const newFunction = function name(params) {
  
}





