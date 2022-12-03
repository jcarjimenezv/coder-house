const express = require("express");

const app = express();

app.get("/api/users", (req, res) => {
  if (req.query) {
    const { id, name } = req.query; //Destructuring
    console.log("Esta es una peticion GET con parametros");
    return res.send({
      message: `Esta es una peticion GET parametros id = ${id}, name = ${name}`,
    });
  }

  console.log("Esta es una peticion GET simple");
  res.send({ message: "Esta es una peticion GET simple" });
});

app.get("/api/users/:id/:name", (req, res) => {
  const { id, name } = req.params; //Destructuring

  res.send({
    message: `Esta es una peticion GET identificador id = ${id}, name = ${name}`,
  });
});

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Listening app port ${server.address().port}`);
});

server.on("error", (error) => {
  console.log("Error===>", error.stack);
});
