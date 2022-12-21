const { Router } = require("express");
const upload = require("../../config/multer");

const users = Router();

users.get("/users", (req, res) => {
  return res.render("index", { print: false, printError: null });
});

users.post("/users", upload.single("myFile"), (req, res, next) => {
  if (!req.file) {
    const error = new Error("Please upload a file");
    return res.render("index", { print: false, printError: error });
  }

  return res.render("index", { file: req.file, print: true, printError: null });
});

module.exports = users;
