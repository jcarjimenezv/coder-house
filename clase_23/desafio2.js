const app = require("express")();
const express = require("express");
const session = require("express-session");

require("dotenv").config();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.COOKIES_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/root", (req, res) => {
  const { name } = req.query;

  if (!req.session.name) {
    req.session.name = name;
    req.session.contador = 1;
    res.send(`Hola bienvenido ${req.session.name}`);
  } else {
    req.session.contador++;
    res.send(
      `${req.session.name} haz ingresado ${req.session.contador} a este sitio!!`
    );
  }
});

app.delete("/olvidar", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.send({ error: "No se ha podido eliminar la session" });
    res.send("Logout ok!");
  });
});

const PORT = process.env.NODE_PORT;

const server = app.listen(PORT, () => {
  console.log(`Listening port ${server.address().port}`);
});
