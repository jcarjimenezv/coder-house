// import de la libreria y el json
const { normalize, denormalize, schema } = require("normalizr");
const holdingJson = require("./json/holding.json");
const util = require("util");
const faker = require("faker")


const empleadosSchema = new schema.Entity('empleados')

const organigramaSchema = new schema.Entity("organigrama", {
    gerente: empleadosSchema,
    encargado: empleadosSchema,
    empleados: [empleadosSchema],
});

const grupoSchema = new schema.Entity("grupo", {
    empresas: [organigramaSchema]
});


const print = (obj) => console.log(util.inspect(obj, false, 12, true))

console.log(' ------------- OBJETO NORMALIZADO --------------- ')
const normalizedOrganigrama = normalize(holdingJson, grupoSchema)
print(normalizedOrganigrama)

console.log(JSON.stringify(holdingJson).length)
console.log(' ------------- OBJETO NORMALIZADO lenght--------------- ')
console.log(JSON.stringify(normalizedOrganigrama).length)

console.log(' ------------- OBJETO NORMALIZADO --------------- ')
const denormalizedOrganigrama = denormalize(normalizedOrganigrama.result, grupoSchema, normalizedOrganigrama.entities)
print(denormalizedOrganigrama)


const longO = JSON.stringify(holdingJson).length;
console.log("Longitud objeto original: ", longO);

const longN = JSON.stringify(normalizedOrganigrama).length;
console.log("Longitud objeto normalizado: ", longN);

const longD = JSON.stringify(denormalizedOrganigrama).length;
console.log("Longitud objeto desnormalizado: ", longD);

const porcentajeC = (longN * 100) / longO;
console.log("Porcentaje de compresión: ", porcentajeC.toFixed(2) + "%");