const express = require("express");

const app = express();

app.get("/api/sumar/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  res.send({ suma: parseInt(num1) + parseInt(num2) });
});

app.get("/api/sumar", (req, res) => {
  const { num1, num2 } = req.query;
  res.send({ suma: parseInt(num1) + parseInt(num2) });
});

app.get("/api/operacion/:operacion", (req, res) => {
  const { operacion } = req.params;
  const numbers = operacion.split("+");
  res.send({ suma: parseInt(numbers[0]) + parseInt(numbers[1]) });
});

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Listening app port ${server.address().port}`);
});

server.on("error", (error) => {
  console.log("Error===>", error.stack);
});
