const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Desafio Get endpoints

const frase = "Hola mundo cómo están";

app.get("/api/frase", (req, res) => {
  res.status(200).send({ frase: frase });
});

app.get("/api/letras/:num", (req, res) => {
  const number = parseInt(req.params.num);
  if (isNaN(number)) {
    res.status(400).send({ error: "El parametro no es un numero" });
  }

  if (frase.length < number) {
    res.status(400).send({ error: "Fuera de rango" });
  }

  res.status(200).send({ letra: frase.charAt(number - 1) });
});

app.get("/api/palabras/:num", (req, res) => {
  const number = parseInt(req.params.num);
  if (isNaN(number)) {
    return res.status(400).send({ error: "El parametro no es un numero" });
  }

  if (frase.split(" ").length < number) {
    return res.status(400).send({ error: "Fuera de rango" });
  }

  return res.status(200).send({ palabra: frase.split(" ")[number] });
});
// Fin desafio Get Endpoints

// Desafio Operaciones con el servidor

app.get("/api/sumar/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params; // Destructuring
  return res.status(200).send({ suma: parseInt(num1) + parseInt(num2) });
});

app.get("/api/sumar", (req, res) => {
  if (req.query.num1 && req.query.num2) {
    const { num1, num2 } = req.query; // Destructuring
    return res.status(200).send({ suma: parseInt(num1) + parseInt(num2) });
  }
  return res.status(500).send({ message: "No hay numeros que sumar" });
});

app.get("/api/operation/:values", (req, res) => {
  const { values } = req.params;
  const operator = values
    .split("")
    .find((val) => val === "+" || val === "-" || val === "*" || val === "÷");

  const numbers = values.split(operator);
  const num1 = numbers[0];
  const num2 = numbers[1];
  let result = 0;
  let message = "";
  switch (operator) {
    case "+":
      message = "Suma";
      result = parseInt(num1) + parseInt(num2);
      break;
    case "-":
      message = "Resta";
      result = parseInt(num1) - parseInt(num2);
      break;
    case "*":
      message = "Multiplicación";
      result = parseInt(num1) * parseInt(num2);
      break;
    case "÷":
      if (num2.includes(0)) {
        message = "Error";
        return res.status(500).send({ [message]: "No se puede dividir por 0" });
      }
      message = "División";
      result = parseInt(num1) / parseInt(num2);
      break;
    default:
      message = "Suma";
      result = parseInt(num1) + parseInt(num2);
      break;
  }
  return res.status(200).send({ [message]: result });
});

// Fin desafio Operaciones con el servidor

// Servidor con get, post, put y delete

const words = "Frase inicial";

app.get("/api/frase", (req, res) => {
  return res.status(200).send({ frase: words });
});

app.get("/api/v2/palabras/:pos", (req, res) => {
  const splited = words.split(" ");
  const { pos } = req.params;
  if (parseInt(pos) <= splited.length) {
    return res.status(200).send({ buscada: splited[pos - 1] });
  }
  return res.status(500).send({ Error: "Fuera de rango" });
});

app.get("/api/v2/palabras/:pos", (req, res) => {
  const splited = words.split(" ");
  if (parseInt(req.params.pos) <= splited.length) {
    return res.status(200).send({ buscada: splited[req.params.pos - 1] });
  }
  return res.status(500).send({ Error: "Fuera de rango" });
});

app.post("/api/v2/palabras", (req, res) => {
  const { palabra } = req.body;
  const splited = words.split(" ");
  splited.push(palabra);
  const pos = splited.findIndex((word) => word === palabra);
  const newWords = splited.map((word) => word).join(" ");
  return res.status(200).send({ agregada: newWords, pos });
});

app.put("/api/v2/palabras/:pos", (req, res) => {
  const { palabra } = req.body;
  const { pos } = req.params;
  const splited = words.split(" ");

  if (parseInt(pos) <= splited.length) {
    const before = splited[parseInt(pos) - 1];
    splited[parseInt(pos) - 1] = palabra;
    const newWords = splited.map((word) => word).join(" ");
    return res.status(200).send({ actualizada: newWords, anterior: before });
  }

  return res.status(500).send({ Error: "Fuera de rango" });
});

app.delete("/api/v2/palabras/:pos", (req, res) => {
  const { pos } = req.params;
  const splited = words.split(" ");

  if (parseInt(pos) <= splited.length) {    
    const newWords = splited.splice(parseInt(pos)-1, 1).map(word => word).join(" ")
    return res.status(200).send({ eliminada: newWords });
  }

  return res.status(500).send({ Error: "Fuera de rango" });
});

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Listening app port ${server.address().port}`);
});

server.on("error", (error) => {
  console.log("Error===>", error.message);
});
