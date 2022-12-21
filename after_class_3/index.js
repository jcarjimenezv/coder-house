const express = require("express");
const users = require('./app/router/users/users')
const animals = require('./app/router/animals/animals')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.set('view engine','hbs')
// app.set('views','./app/views')

app.set('view engine','ejs')
app.set('views','./app/views')

app.use('/api', users)
app.use('/api/v2', animals)

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${server.address().port}`);
});
