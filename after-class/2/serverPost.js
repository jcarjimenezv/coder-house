const express = require("express");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post("/api/users", (req, res) => {
    const { id, name } = req.body
    console.log({id, name });
    res.send({ message: {id, name } });
});
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Listening app port ${server.address().port}`);
});

server.on("error", (error) => {
  console.log("Error===>", error.stack);
});
