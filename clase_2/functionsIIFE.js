/* IIFE (Inmediately Invoked Function Expresions) */
(function(){
    console.log('Hola soy una función IIFE')
})();

// Otra forma de escribir IIFE
(() => console.log('Hola soy la segunda función IIFE'))();

// Escribiendo valores de variables 
// ya definidas o variables de entorno
const myName = "Juan";
(()=> console.log(`Hola ${myName} soy la tercera función IIFE`))();
