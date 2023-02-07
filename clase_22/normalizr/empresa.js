// import de la libreria y el json
const { normalize, denormalize, schema } = require("normalizr");
const empresaJson = require("./json/empresa.json");
const util = require("util");

// crear los schemas para normalizar la data

const empleadosSchema = new schema.Entity("empleado");

const organigramaSchema = new schema.Entity("organigrama", {
  gerente: empleadosSchema,
  encargado: empleadosSchema,
  empleados: [empleadosSchema],
});

const print = (obj) => console.log(util.inspect(obj, false, 12, true))


console.log(' ------------- OBJETO NORMALIZADO --------------- ')
const normalizedOrganigrama = normalize(empresaJson, organigramaSchema)
print(normalizedOrganigrama)

console.log(JSON.stringify(empresaJson).length)
console.log(' ------------- OBJETO NORMALIZADO lenght--------------- ')
console.log(JSON.stringify(normalizedOrganigrama).length)


console.log(' ------------- OBJETO DESNORMALIZADO --------------- ')
const denormalizedOrganigrama = denormalize(normalizedOrganigrama.result, organigramaSchema, normalizedOrganigrama.entities)
print(denormalizedOrganigrama)

console.log(' ------------- OBJETO DESNORMALIZADO lenght--------------- ')
console.log(JSON.stringify(denormalizedOrganigrama).length)
