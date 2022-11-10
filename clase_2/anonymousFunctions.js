// Asignando una función a una variable
const printValue = function(name) {
    console.log(`Hola ${name}, soy una función que esta asignada a una variable`)
}
printValue("Juan")

// Otra forma de escribir la función asignada a una variable
const printValue2 = (name) => console.log(`Hola ${name}, soy una función que esta asignada a una variable`)
printValue2("Pedro")

// función que retorna otra función anonima
function printValue3(name) {
    return function() {
        console.log(`Hola ${name}, soy una función que retorna otra función anonima`)    
    }
} 
printValue3("Jonh Doe")()
// funcion asignada a una variable que retorna una función anonima
const newFunction3 = printValue3("Another Name")
newFunction3()

// otra forma de escribirlo función que retorna otra función anonima

const printValue4 = (name, id) => ()=> console.log(`Hola ${name}, soy la función ${id} que retorna otra función anonima`)    

printValue4("Jane Doe",1)()

// funcion asignada a una variable que retorna una función anonima
const newFunction4 = printValue4("Another Name", 2)
newFunction4()

// Uso de función anonima
const hobbies = ["Leer", "Nadar", "Escuchar Musica", "Montar Bicicleta"]
hobbies.map((hobbie)=> console.log(`Hobbie: ${hobbie}`))