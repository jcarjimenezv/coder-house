import faker from 'faker'
faker.locale = 'es'
const { name, internet, random } = faker
import { writeFileSync } from 'fs'

let str = 'NOMBRE;APELLIDO;EMAIL;TRABAJO;LUGAR\n'

for (let i = 0; i < 100; i++) {
   str += name.firstName() +
       ';' + name.lastName() +
       ';' + internet.email() +
       ';' + name.jobTitle() +
       ';' + random.locale() +
       '\n'
}

writeFileSync('./test.csv', str)

console.log('archivo guardado')