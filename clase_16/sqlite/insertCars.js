const { options } = require("./options/SQLite3.js")
const knex = require("knex")(options)

const cars = [
    { name: "Audi", price: 1000 },
    { name: "Renault", price: 2000 },
    { name: "Fiat", price: 3000 },
    { name: "Hummer", price: 4000 },
    { name: "Toyota", price: 5000 },
]

knex("cars2").insert(cars)
    .then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        console.log("Conexión cerrada")
        knex.destroy()
    })