const mongoose = require("mongoose");

const clientsSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  dni: {
    type: String,
    unique: true,
  },
});

const clientsModel = mongoose.model("clients", clientsSchema);

try {
  async function connection(params) {
    await mongoose.connect(
      "mongodb+srv://<user>:<password>@<host_mongo_atlas>/<database_name>?retryWrites=true&w=majority",
      {
        serverSelectionTimeoutMS: 5000,
      }
    );
    console.log("Base de datos conectada");

    const clients = await clientsModel.find({});

    console.log("clients===>", clients);
  }

  connection();
} catch (error) {
  console.log("Error ", error);
}
