import express from "express";
import { writeFileSync } from "fs";

import faker from "faker";
faker.locale = "es";
const { name, internet, random } = faker;

const app = express();
app.use(express.json());

const QUANTITY = 10;

app.get("/test", (req, res) => {
  const limit = Number(req.query.cant) || QUANTITY;
  let str = "NOMBRE;APELLIDO;EMAIL;TRABAJO;LUGAR\n";
  for (let i = 0; i < limit; i++) {
    str +=
      name.firstName() +
      ";" +
      name.lastName() +
      ";" +
      internet.email() +
      ";" +
      name.jobTitle() +
      ";" +
      random.locale() +
      "\n";
  }

  writeFileSync("./test.csv", str);

  return res.status(200).send({ message: "Success!!" });
});

const server = app.listen(4000, () => {
  console.log("Listening on port ", server.address().port);
});

server.on("error", (err) => console.log("An error occurred ", err));
