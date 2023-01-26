const mongoose = require("mongoose");

//  1er paso definir el schema del documento
const user = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

// 2do paso crear el modelo para almacenar el documento

const UserDAO = mongoose.model('users', user)

// 3er paso crear conexion

mongoose.connect('mongodb://localhost/company', {
  serverSelectionTimeoutMS: 5000,
}).then(()=> {
    console.log('Base de datos conectada')
}).catch((err)=> {
    console.log('Error al conectar ', err)
})


UserDAO.count().then((data)=> console.log("count", data))

const users = [{
  age: 10,
  name: "Jose"
},{
  age: 15,
  name: "Maria"
}]

UserDAO.create(users).then((data)=> console.log("users", data))

UserDAO.count().then((data)=> console.log("count", data))

UserDAO.count().then((data)=> console.log("count", data))

// await mongoose.connect('mongodb://localhost/company', {
//   serverSelectionTimeoutMS: 5000,
// })

//mongoose.disconnect()


