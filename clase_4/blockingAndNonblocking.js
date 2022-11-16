

const fs = require("fs");
// async
fs.readFile("../README.md", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//sync
fs.unlinkSync("/README.md");

//
fs.readFile("../README.md", "utf-8", (readFileErr, data) => {
  if (readFileErr) throw readFileErr;
  console.log(data);
  fs.unlink("../README", (unlinkErr) => {
    if (unlinkErr) throw unlinkErr;
  });
});
