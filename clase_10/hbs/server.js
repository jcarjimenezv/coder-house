const express = require('express')
const hbs = require('hbs')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.set("views", "./views");

app.get('/', (req, res)=> {
    res.render('index', { name: 'Juan', lastname: 'Jimenez'})
})

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${server.address().port}`);
});

server.on('error', (error)=> console.log(`An error ocurred on server ${error.message}`))