const { options } = require("./options/SQLite3.js");
const knex = require("knex")(options);

knex
  .from("cars2")
  .select("name", "price").where("price", ">=", "4000")
  .then((rows) => {
    for (const row of rows) {
      console.log(`${row["name"]} ${row["price"]}`);
    }
  })
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    console.log("Conexión cerrada")
    knex.destroy();
  });