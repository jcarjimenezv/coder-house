const admin = require("firebase-admin");

const serviceAccount = require("./DB/<Your_json_file>");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://<your_db_name>.firebaseio.com",
  });
  console.log("Connected!!!");
  
  async function process(params) {
    const db = admin.firestore();

    const colores = db.collection("colores");

    // CREATE

    const red = await colores.add({ nombre: "red" });
    const green = await colores.add({ nombre: "green" });
    const blue = await colores.add({ nombre: "blue" });
    console.log("Colores insertados");

    // READ
    let allColors = await colores.get();

    allColors.forEach((color) => {
      console.log({ id: color.id, ...color.data() });
    });

    // UPDATE
    await colores.doc(blue.id).update({ color: "navy", nombre: "azul-2" });
    console.log("Color azul actualizado");

    allColors = await colores.get();

    allColors.forEach((color) => {
      console.log({ id: color.id, ...color.data() });
    });

    // DELETE
    await colores.doc(red.id).delete();
    console.log("Color rojo se ha eliminado");

    allColors = await colores.get();

    allColors.forEach((color) => {
      console.log({ id: color.id, ...color.data() });
    });
  }

  process();
} catch (error) {
  console.log("Error ", error);
}
