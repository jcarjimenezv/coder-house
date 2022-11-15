const fs = require('fs');
const data = fs.readFileSync('../README.md', 'utf-8');
console.log(data)
console.log("Esto deberia escribirse despues de haber leido el archivo")