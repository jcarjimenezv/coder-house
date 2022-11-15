const gretting = (name) => console.log(`Hola ${name} es un gusto saludarte!!!`);

// setTimeout(() => {
//   gretting("Santiago");
//   setTimeout(() => {
//     gretting("Albis");
//   }, 2000); // 2s
// }, 5000); // 5s

console.warn("Esto deberia escribirse primero");

const clear = setInterval(() => {
  gretting("Jose");
}, 2000);

setTimeout(() => {
  clearInterval(clear);
}, 5000);
