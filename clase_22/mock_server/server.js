import express, { json } from 'express'
import users from './router/users.js'

const app = express()

app.use(json())

app.use('/api/users', users)

const PORT = 4000
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en servidor: ${error}`))
