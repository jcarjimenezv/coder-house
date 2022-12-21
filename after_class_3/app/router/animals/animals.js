const { Router } = require("express");
const upload = require("../../config/multer");

const animals = Router();

animals.post("/animals", upload.array("myFiles", 4), (req, res, next) => {
  const files = req.files;
  if (!files) {
    const error = new Error("Please choose files");
    return next(error);
  }
  return res.send(files);
});

module.exports = animals;
