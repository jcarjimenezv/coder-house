const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/hello", (req, res) => {
  res.render("index", {
    title: "Mi primer plantilla EJS JS",
    mensaje: "Usando EJS JS en express",
    name: "Juan",
  });
});

let personas = []

app.get("/datos", (req, res) => {
  const { min, max, nivel, titulo } = req.query;
  res.render("pages/index", {
    title: "Mi primer plantilla EJS JS",
    nivel,
    min,
    max,
    titulo,
  });
});

app.get('/', (req, res) => {
  res.render('pages/formulario', {personas, title: 'Render title from partials'});
});

app.post('/datos', (req, res) => {
  personas.push(req.body)
  console.log(personas)
  res.redirect('/')
});

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${server.address().port}`);
});
