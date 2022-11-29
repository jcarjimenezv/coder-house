const express = require("express");

const app = express();
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

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Listening app port ${server.address().port}`);
});

server.on("error", (error) => {
  console.log("Error===>", error.stack);
});
