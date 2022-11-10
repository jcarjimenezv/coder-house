/*Closure*/
// Estado adyacente: Simplemente hace referencia al uso de 
function iniciar() {
  const nombre = "Mozilla"; // La variable nombre es una variable local creada por iniciar.
  function mostrarNombre() {
    // La función mostrarNombre es una función interna, una clausura.
    console.log(nombre); // Usa una variable declarada en la función externa.
  }
  mostrarNombre();
}
iniciar();

function crearGritarNombre(nombre) {
    const signosDeExclamacion = '!!!'
    return function () {
        console.log(`${nombre}${signosDeExclamacion}`)
    }
 }


 
crearGritarNombre('coderhouse')()
 
// gritarCH() // muestra por pantalla: coderhouse!!!
