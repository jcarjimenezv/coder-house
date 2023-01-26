const { options } = require("./options/SQLite3");
const knex = require("knex")(options);

const main2 = async () => {
  try {
    await knex.schema.createTable("articulos2", (table) => {
      table.increments("id");
      table.string("nombre", 15);
      table.string("codigo", 10);
      table.integer("precio"), 
      table.integer("stock");
    });

    console.log("Tabla creada");

    const articulos = [
      { nombre: "Art1", codigo: "1", precio: 1000, stock: 1 },
      { nombre: "Art2", codigo: "2", precio: 2000, stock: 2 },
      { nombre: "Art3", codigo: "3", precio: 3000, stock: 3 },
      { nombre: "Art4", codigo: "4", precio: 4000, stock: 4 },
      { nombre: "Art5", codigo: "5", precio: 5000, stock: 5 },
    ];

    await knex("articulos2").insert(articulos);

    console.log("Data insertada");

    let rows = await knex.from("articulos2").select("*")
    rows.forEach((row) => console.log(`${row[ "id" ]} ${row[ "nombre" ]} ${row[ "codigo" ]} ${row[ "precio" ]} ${row[ "stock" ]}`))

 
    await knex.from("articulos2").where("id", 2).update({ stock: 0 })

    console.log("Articulo actualizado");

    await knex.from("articulos2").where("id", 3).del()
    console.log("Articulo eliminado");

    rows = await knex.from("articulos2").select("*")
    rows.forEach((row) => console.log(`${row[ "id" ]} ${row[ "nombre" ]} ${row[ "codigo" ]} ${row[ "precio" ]} ${row[ "stock" ]}`))

  } catch (error) {
    console.log("Error", e.message);
  } finally {
    knex.destroy();
  }
};

main2();
