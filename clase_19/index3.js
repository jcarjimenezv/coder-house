const estudiantesDao = require("./estudiantesSchema");
const connection = require("./connection");

const getData = async () => {
  connection.then(() => console.log("Base de datos conectada"));

  const estudiantes = await estudiantesDao.find().sort({ nombre: 1 });

  console.log("estudiantes", estudiantes);

  const masJoven = await estudiantesDao.find({}).sort({ edad: 1 }).limit(1);

  console.log("mas Joven", masJoven);

  const segundoMasJoven = await estudiantesDao
    .find({})
    .sort({ edad: 1 })
    .limit(1)
    .skip(1);

  console.log("2masJoven", segundoMasJoven);

  const curso2A = await estudiantesDao.find({ curso: "2A" });

  console.log("curso2A", curso2A);

  const estudiantes2 = await estudiantesDao
    .find({}, { nombre: 1, apellido: 1 })
    .sort({ nombre: -1 });

  console.log("estudiantes2", estudiantes2);

  const estNota = await estudiantesDao.find({ nota: 10 });
  console.log("estNota", estNota);
  let notas = 0
  estudiantes.forEach(estudiante => {
    notas += estudiante.nota
  })

  console.log(`Promedio: ${(notas / estudiantes.length).toFixed(2)}`)
  const estudiantes1A = await estudiantesDao.find({ curso: "1A"}); 
  let notas1A = 0
  estudiantes1A.forEach(estudiante => {
    notas1A += estudiante.nota
  })

  console.log(`Promedio: ${(notas1A / estudiantes1A.length).toFixed(2)}`)

};

getData();
