function exampleFunction() {
    // x solo se puede utilizar en exampleFunction
    const x = 'declarada en el scope local'
    console.log(x)
}
 
console.log(x) // ReferenceError: x is not defined


const x = 'declarada en el scope global'
function exampleFunction() {
   console.log(x) // x existe acá adentro
}

exampleFunction() // esto no lanza error

console.log(x) // x existe acá afuera también
