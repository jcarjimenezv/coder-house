require("dotenv").config({
    path: "../.env",
  });
  const { PromisesFileManager } = require("./fileManager");
  
  const processSyncFiles = async () => {
    const path = process.env.LOCAL_FILES_PATH;
    const action = process.argv[2];
    const filename = process.argv[3];
    const data = process.argv[4];
    const codification = process.argv[5] ? process.argv[5] : "utf-8";
    const promiseFileManager = new PromisesFileManager(path, filename, codification);
    let result;
    switch (action) {
      case "write":
        await promiseFileManager.writeFilePromise(data);
        console.log("Se creo el archivo correctamente!!");
        break;
      case "read":
        result = await promiseFileManager.readFilePromises();
        console.log(`La información del archivo es: ${result}`);
        break;
      case "append":
        await promiseFileManager.appendPromises(data);
        console.log(`Se edito el archivo correctamente`);
        break;
      case "mkdir":
        await promiseFileManager.mkdirPromises();
        console.log(`Se creo la carpeta correctamente`);
        break;
    }
    result ? console.log(result) : null;
  };
  
  processSyncFiles();
  