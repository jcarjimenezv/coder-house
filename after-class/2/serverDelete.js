const express = require("express");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.delete("/api/users/:id", (req, res) => {
    const { id } = req.params
    console.log({id });
    res.send({ message: {id} });
});
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Listening app port ${server.address().port}`);
});

server.on("error", (error) => {
  console.log("Error===>", error.stack);
});
