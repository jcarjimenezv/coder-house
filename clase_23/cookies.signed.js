const app = require("express")();
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(cookieParser([process.env.COOKIES_SECRET, process.env.COOKIES_SECRET_2]));

app.get("/setExp", (req, res) => {
  res.cookie("name", "raul", {
    expires: new Date(Date.now() + 900000),
    maxAge: 900000,
    signed: true
  }).send("Cookie set!");
});

app.get("/getExp", (req, res) => {
  res.send(req.cookies);
});

app.get("/clear", (req, res) => {
    res.clearCookie('name').send('Cookie clear ok!!');
  });

const PORT = process.env.NODE_PORT;

const server = app.listen(PORT, () => {
  console.log(`Listening port ${server.address().port}`);
});
