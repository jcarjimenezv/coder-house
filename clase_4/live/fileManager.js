const fs = require("fs");

class SyncFileManager {
  constructor(path, filename, codification) {
    this.path = path;
    this.filename = filename;
    this.codification = codification;
  }

  writeFileSync = (data) =>
    fs.writeFileSync(`${__dirname}${this.path}/${this.filename}`, data);

  readFileSync = () =>
    fs.readFileSync(
      `${__dirname}${this.path}/${this.filename}`,
      this.codification
    );

  appendSync = (data) =>
    fs.appendFileSync(`${__dirname}${this.path}/${this.filename}`, data);

  unlinkFileSync = () => {
    try {
      if (!fs.existsSync(`${__dirname}${this.path}/${this.filename}`)) {
        throw new Error(`El archivo ${this.filename} no existe`);
      }
      fs.unlinkSync(`${__dirname}${this.path}/${this.filename}`);
      return `El archivo ${this.filename} fue eliminado`;
    } catch (error) {
      return error.message;
    }
  };

  mkdirSync = () => fs.mkdirSync(`${__dirname}${this.path}/${this.filename}`);
}

class AsyncFileManager {
  constructor(path, filename, codification) {
    this.path = path;
    this.filename = filename;
    this.codification = codification;
  }

  writeFileAsync = (data) =>
    fs.writeFile(`${__dirname}${this.path}/${this.filename}`, data, (err) => {
      if (err) throw err;
    });

  readFileAsync = () =>
    fs.readFile(
      `${__dirname}${this.path}/${this.filename}`,
      this.codification,
      (err, data) => {
        if (err) throw new Error("Error leyendo el archivo");
        console.log(`La información del archivo es: ${data}`);
      }
    );

  appendAsync = (data) =>
    fs.appendFile(`${__dirname}${this.path}/${this.filename}`, data, (err) => {
      if (err) throw new Error("Error agregando información al archivo");
    });

  unlinkFileAsync = () => {
    try {
      fs.exists(`${__dirname}${this.path}/${this.filename}`, (exists) => {
        if (!exists) throw new Error(`El archivo ${this.filename} no existe`);
        fs.unlink(`${__dirname}${this.path}/${this.filename}`, (err, data) => {
          if (err) throw err;
          return `El archivo ${this.filename} fue eliminado`;
        });
      });
    } catch (error) {
      return error.message;
    }
  };

  mkdirAsync = () =>
    fs.mkdir(`${__dirname}${this.path}/${this.filename}`, (err) => {
      if (err) throw err;
    });
}

class PromisesFileManager {
  constructor(path, filename, codification) {
    this.path = path;
    this.filename = filename;
    this.codification = codification;
  }

  writeFilePromise = async data => fs.promises.writeFile(`${__dirname}${this.path}/${this.filename}`, data);

  readFilePromises = async () => fs.promises.readFile(`${__dirname}${this.path}/${this.filename}`,this.codification);

  appendPromises = async data => fs.promises.appendFile(`${__dirname}${this.path}/${this.filename}`, data);
  
  mkdirPromises = () => fs.mkdir(`${__dirname}${this.path}/${this.filename}`);
}

module.exports = {
  AsyncFileManager,
  SyncFileManager,
  PromisesFileManager,
};
