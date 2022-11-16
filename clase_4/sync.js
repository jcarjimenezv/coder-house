console.log("Inicio");

const dos = () => console.log("Dos")

const uno = () => {
  console.log("Uno");
  dos();
  console.log("Tres");
}

uno();
console.log("Fin");