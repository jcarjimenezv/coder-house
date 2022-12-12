const express = require("express");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post("/upload-single", upload.single("myfile"), (req, res, next) => {
    const file = req.file;
    if (!file) {
      const error = new Error("Please upload a file");
      return next(error);
    }
    res.send(file);
});


app.post("/upload-multiple", upload.array("myfiles", 12), (req, res, next) => {
    const files = req.files;
    if (!files) {
      const error = new Error("Please choose files");
      return next(error);
    }
    res.send(files);
  });

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${server.address().port}`);
});

server.on("error", (error) => {
  console.log(`An error ocurred on server ${error.message}`);
});
