const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose.set("debug", true);
const connection = mongoose.connect("mongodb://localhost/colegio", {
  serverSelectionTimeoutMS: 5000
});

module.exports = connection;
