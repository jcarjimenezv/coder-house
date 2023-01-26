const { options } = require("./options/SQLite3")
const knex = require("knex")(options)

knex.schema.createTable("cars2", table => {
    table.increments("id")
    table.string("name")
    table.integer("price")
})
    .then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        console.log("Conexión cerrada")
        knex.destroy();
    });

