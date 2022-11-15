// // función que recibe una función
// const executeFunction = (write) => write();
// const writeLog = () => console.log("Hola Coders!!!");
// executeFunction(writeLog);

// función que recibe una función y parametros

// const executeFunction2 = (writeFun, name) => writeFun(name);
// const write2 = (name) => console.log(`Hola coders!!! les saluda ${name}`);
// executeFunction2(write2, "Juan");

// // callback sincronico ==> se conoce su resultado inmediatemente
// writeAndLog = (texto, callbackToLog) => {
//   // simulamos que escribimos en un archivo!
//   console.log(texto);
//   // al finalizar, ejecutamos el callback
//   callbackToLog("archivo escrito con éxito");
// }

// writeAndLog("hola mundo de los callbacks!", (messageToLog) => {
//   const fecha = new Date().toLocaleDateString();
//   console.log(`${fecha}: ${messageToLog}`);
// });

// Sin callback
// voyPrimera = () => {
// 	setTimeout(() => {
// 	console.log("Voy primera");
// 	}, 3000);
// }
// voySegunda = ()=> console.log("Voy segunda");

// voyPrimera();
// voySegunda();

// con callback

voyPrimero = (callback) => {
  setTimeout(() => {
    console.log("Voy primero");
    callback();
  }, 1000);
};
voySegundo = () =>
  setTimeout(() => {
    console.log("Voy segundo");
  }, 1000);

voyPrimero(voySegundo);
