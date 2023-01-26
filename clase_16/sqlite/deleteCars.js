const { options } = require("./options/SQLite3.js")
const knex = require("knex")(options)
//Elimina todos los autos
knex.from("cars2").del()
    .then(() => console.log("All cars deleted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
    })