const express = require("express");
const fs = require("fs");
const validateBody = require("../middlewares/validateBody");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date());
  next();
});

router.get("/users", async (req, res) => {
  const allUsers = await fs.promises.readFile(
    "/home/juanjimenez/Escritorio/coder-house/repository/coder-house/clase_8/files/users.txt",
    "utf-8"
  );
  res.send({ users: JSON.parse(allUsers) });
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  let users = await fs.promises.readFile(
    "/home/juanjimenez/Escritorio/coder-house/repository/coder-house/clase_8/files/users.txt",
    "utf-8"
  );
  users = JSON.parse(users);
  res.send({ user: users.find((user) => user.id == id) });
});

router.post("/users/:id", validateBody, async (req, res) => {
  try {
    return res.send({ req: req.isCorrect });
  } catch (error) {
    return res.send({ error: error.message });
  }
});

module.exports = router;
