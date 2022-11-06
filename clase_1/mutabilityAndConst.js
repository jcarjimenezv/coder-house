const person = {
    firstName: "Juan",
    lastName: "Jimenez",
    age: 34,
    weight: 80.5,
    isMarried: true,
    hobbies: ["Leer", "Nadar", "Escuchar Musica", "Montar Bicicleta"],
};

console.log("Constante person: ", person)

/*
// Type Error
Assignment to constant variable.
person = {
    firstName: "Jose",
    lastName: "Avila",
    age: 26,
    weight: 24,
    isMarried: false,
    hobbies: ["Leer"],
};*/

// Mutabilidad
person.firstName = "Jose"
person.lastName = "Avila"
person.age = 24
person.weight = 40
person.isMarried = false
person.hobbies.push("Leer")
console.log("Objeto persona mutado: ", person)