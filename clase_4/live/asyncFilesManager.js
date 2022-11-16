require("dotenv").config({
  path: "../.env",
});
const { AsyncFileManager } = require("./fileManager");

const processSyncFiles = () => {
  const path = process.env.LOCAL_FILES_PATH;
  const action = process.argv[2];
  const filename = process.argv[3];
  const data = process.argv[4];
  const codification = process.argv[5] ? process.argv[5] : "utf-8";
  const asyncFileManager = new AsyncFileManager(path, filename, codification);
  switch (action) {
    case "write":
      asyncFileManager.writeFileAsync(data);
      break;
    case "read":
      asyncFileManager.readFileAsync();
      break;
    case "append":
      asyncFileManager.appendAsync(data);
      break;
    case "unlink":
      asyncFileManager.unlinkFileAsync();
      break;
    case "mkdir":
      asyncFileManager.mkdirAsync();
      break;
  }
};

processSyncFiles();
