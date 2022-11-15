const sumar = (a,b) => a+b //Sin llaves retorno en una sola linea implicito

const number1 = 5, number2 = 6
const suma = sumar(number1, number2) 
console.log(`La suma de ${number1} y ${number2} es ${suma}`)

//-------------------------------------------//

const sumar2 = (a , b) => { // multiples instrucciones uso de {}
    const s = a+b
    return s
}
console.log(`La suma de ${number1} y ${number2} es ${sumar2(number1, number2)}`)

//-------------------------------------------//

const duplicate = a => a * 2 // Sin parentesis solo un parametro return implicito
console.log(`El doble de  ${number1} es ${duplicate(number1)}`)

//-------------------------------------------//

const printMessage = () => // Si la función no recibe params el () es obligatorio
    console.log('Hola Coders!!!!')
printMessage();
//-------------------------------------------//

// Si el retorno de una función es un objeto este debe ir entre ()
const getPerson = () => ({nombre: 'Juan', edad: 34})
console.log(getPerson());
 

