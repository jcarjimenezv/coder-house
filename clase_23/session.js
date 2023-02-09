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

app.get("/contador", (req, res) => {
  if (req.session.contador) {
    req.session.contador++
    res.send(`Usted ha ingresado a la pagina ${req.session.contador}`);
  }else {
    req.session.contador=1
    res.send(`Bienvenido!!`);
  }
});


app.delete("/contador", (req, res) => {
    
      req.session.destroy(err=> {
        if (err) return res.send({error: 'No se ha podido eliminar la session'})
        res.send('Logout ok!')
      })
  });

const PORT = process.env.NODE_PORT;

const server = app.listen(PORT, () => {
  console.log(`Listening port ${server.address().port}`);
});
