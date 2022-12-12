const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(morgan("dev"));
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  const context = {
    numberOne: "1",
    numberTwo: "2",
    operation: "+,-,*,/",
  };
  res.render("index", context);
});

app.post("/print", express.json(), (req, res) => {
  const { numberOne, numberTwo, operation } = req.body;
  let result = 0;
  switch (operation) {
    case "+":
      result = parseInt(numberOne) + parseInt(numberTwo);
      break;
    case "-":
      result = parseInt(numberOne) - parseInt(numberTwo);
      break;
    case "*":
      result = parseInt(numberOne) * parseInt(numberTwo);
      break;
    case "/":
      result = parseInt(numberOne) / parseInt(numberTwo);
      break;

    default:
      result = parseInt(numberOne) + parseInt(numberTwo);
      break;
  }
  const context = {
    result,
    print: true
  };
  res.render("index", context);
});

const server = app.listen(3000, () => {
  console.log(`Listening app port ${server.address().port}`);
});
