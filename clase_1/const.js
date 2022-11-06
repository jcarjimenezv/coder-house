/*const i = 0
Assignment to constant variable.
 i = 1*/ 

// Variable declarada fuera de la funcion

// Descomentar para ver el error
/*const i = 0 // Variable Global
 function foo() {
    i = 1 // Variable local
    const j = 2 // Variable local
    if(true){
        console.log("i: "+ i)
        console.log("j: "+ j)
    }    
}
console.log("i global: " + i) 

foo() */

// Variable declarada dentro de la funcion
function foo2() {
    const i = 0 // Variable local pertenece a la funcion foo2()
    if (true) {
        const i = 1 // Variable local pertenece al bloque if
        console.log("i variable dentro del if: "+i)
    }
    console.log("i variable dentro de la función foo2(): "+i)
} 
foo2()

// Variable fuera de alcance

function foo3() {
    if (true) {
        const a = 1 // Variable local pertenece al bloque if
    }
    console.log("a variable fuera del alcance: "+a)
}
foo3()