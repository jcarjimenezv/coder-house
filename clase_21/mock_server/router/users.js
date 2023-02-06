import { Router } from "express";
import ApiUsersMock from "../api/users.js";

const usersApi = new ApiUsersMock();

const router = Router();

router.post("/popular", async (req, res, next) => {
  try {
    res.json(await usersApi.popular(req.query.cant));
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    res.json(await usersApi.listarAll());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.json(await usersApi.listar(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.json(await usersApi.guardar(req.body));
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    res.json(await usersApi.actualizar({ ...req.body, id: req.params.id }));
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    res.json(await usersApi.borrar(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  const erroresNoEncontrado = [
    "Error al listar: elemento no encontrado",
    "Error al actualizar: elemento no encontrado",
    "Error al borrar: elemento no encontrado",
  ];

  if (erroresNoEncontrado.includes(err.message)) {
    res.status(404);
  } else {
    res.status(500);
  }
  res.json({ message: err.message });
});

export default router;
