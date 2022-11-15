const operation = (a,b,func) => func(a,b)

const sumar = (a,b) => a+b
const restar = (a,b) => a-b
const multiplicar = (a,b) => a*b
const dividir = (a,b) => a/b
const mod = (a,b) => a%b

console.log(operation(2, 3, sumar ))
console.log(operation(4, 3, restar ))
console.log(operation(10, 3, multiplicar ))
console.log(operation(10, 2, dividir ))
console.log(operation(10, 3, mod ))

