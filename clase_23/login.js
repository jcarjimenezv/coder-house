const express = require("express");
const session = require("express-session");
require("dotenv").config();

const app = express();

app.use(
  session({
    secret: process.env.COOKIES_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/login", (req, res) => {
  const { username, password } = req.query;

  if (username !== "juan" || password !== "jimenez") {
    return res.send("login failed");
  }

  req.session.user = username;
  req.session.admin = true;
  res.send("login success!");
});

const auth = (req, res, next) => {
  if (req.session.user === "juan" && req.session.admin) {
    return next();
  }
  return res.status(401).send("error de autorización!");
};

app.get("/privado", auth, (req, res) => {
  res.send("si estas viendo esto es porque ya te logueaste!");
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.json({ status: "Logout ERROR", body: err });
    } else {
      res.send("Logout ok!");
    }
  });
});

const PORT = process.env.NODE_PORT;

const server = app.listen(PORT, () => {
  console.log(`Listening port ${server.address().port}`);
});