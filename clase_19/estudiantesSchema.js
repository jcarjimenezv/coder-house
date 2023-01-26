const mongoose = require("mongoose");

const estudiantesSchema = new mongoose.Schema(
    {
      nombre: { type: String, required: true },
      apellido: { type: String, required: true },
      edad: { type: Number, required: true },
      dni: { type: String, required: true, unique: true },
      curso: { type: String, required: true },
      nota: { type: Number, required: true },
    },
    {
      timestamps: true,
    }
  );

  const estudiantesDao = mongoose.model("estudiantes", estudiantesSchema);

  module.exports = estudiantesDao