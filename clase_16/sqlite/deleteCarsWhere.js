const { options } = require("./options/SQLite3.js")
const knex = require("knex")(options)
//Elimina los autos cuyo precio es mayor a 500
knex.from("cars2").where("price", ">", "5000").del()
    .then(() => console.log("Matching cars deleted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
})