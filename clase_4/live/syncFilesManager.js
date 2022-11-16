require("dotenv").config({
  path: "../.env",
});
const { SyncFileManager } = require("./fileManager");

const processSyncFiles = () => {
  const path = process.env.LOCAL_FILES_PATH;
  const action = process.argv[2];
  const filename = process.argv[3];
  const data = process.argv[4];
  const codification = process.argv[5] ? process.argv[5] : "utf-8";
  const syncfileManager = new SyncFileManager(path, filename, codification);
  let result;
  switch (action) {
    case "write":
      syncfileManager.writeFileSync(data);
      console.log("Se creo el archivo correctamente!!");
      break;
    case "read":
      result = syncfileManager.readFileSync();
      console.log(`La información del archivo es: ${result}`);
      break;
    case "append":
      syncfileManager.appendSync(data);
      console.log(`Se edito el archivo correctamente`);
      break;
    case "unlink":
      syncfileManager.unlinkFileSync(data);
      console.log(`Se elimino el archivo correctamente`);
      break;
    case "mkdir":
      syncfileManager.mkdirSync();
      console.log(`Se creo la carpeta correctamente`);
      break;
  }
  result ? console.log(result) : null;
};

processSyncFiles();
