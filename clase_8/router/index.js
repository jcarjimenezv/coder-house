const express = require("express");

const router = require("./routes/users");

const app = express();

app.use('/api', router)

app.use(express.static('public'))


const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${server.address().port}`);
});

server.on("error", (error) => {
  console.log(`An error ocurred on the server ${error.message}`);
});
