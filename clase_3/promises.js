const axios = require("axios");

function dividir(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor == 0) {
      reject("no se puede dividir por cero");
    } else {
      resolve(dividendo / divisor);
    }
  });
}

// resolve()

// dividir(10, 2)
//   .then((resultado) => {
//     console.log(`resultado: ${resultado}`);
//   })
//   .catch((error) => {
//     console.log(`error: ${error}`);
//   });

//reject()

// dividir(10, 0)
//   .then((resultado) => {
//     console.log(`resultado: ${resultado}`);
//   })
//   .catch((error) => {
//     console.log(`error: ${error}`);
//   });

// caso practico promesa resuelta

// const getPokemons = () => {
//   return new Promise((resolve, reject) => {
//     try {
//       resolve(axios.get("https://pokeapi.co/api/v2/pokemon"));
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// getPokemons()
//   .then((data) => data.data)
//   .then((data) => console.log(JSON.stringify(data)))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// // caso practico promesa pending

const getPokemons = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(axios.get("https://pokeapi.co/api/v2/pokemon"));
    } catch (error) {
      reject(error);
    }
  });
};

const data = getPokemons()
console.log(data)

