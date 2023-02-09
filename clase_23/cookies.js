const app = require("express")();
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(cookieParser());

app.get("/set", (req, res) => {
  res.cookie("nombre", "juan").send("Cookie set!");
});

app.get("/get", (req, res) => {
  res.send(req.cookies);
});

app.get("/clear", (req, res) => {
  res.clearCookie("nombre").send("Cookie clear!");
});

console.log(process.env);

const PORT = process.env.NODE_PORT;

const server = app.listen(PORT, () => {
  console.log(`Listening port ${server.address().port}`);
});
