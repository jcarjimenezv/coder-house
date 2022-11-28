const express = require("express");

const app = express();

app.get("/api/print", (req, res) => {
  res.send('<h1 style="color: blue">Bienvenidos al servidor express</h1>');
});

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Listening app port ${server.address().port}`);
});

server.on("error", (error) => {
  console.log("Error===>", error.stack);
});
