const app = require("express")();
const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config("./.env");

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/cookies", (req, res) => {
  const { name, value, expirationTime } = req.body;

  if (!name || !value) {
    res.send({ error: "Los campos name y value son necesarios" });
  }

  if (expirationTime) {
    res
      .cookie(name, value, {
        maxAge: 1000 * parseInt(expirationTime),
      })
      .send("Cookie set!");
  } else {
    res.cookie(name, value).send("Cookie set!");
  }
});

app.get("/cookies", (req, res) => {
  res.send(req.cookies);
});

app.delete("/cookies", (req, res) => {
  res.clearCookie(req.query.name).send("Cookie cleared!!");
});

const PORT = process.env.NODE_PORT;

const server = app.listen(PORT, () => {
  console.log(`Listening port ${server.address().port}`);
});
