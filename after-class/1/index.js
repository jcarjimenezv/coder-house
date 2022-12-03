const fs = require("fs");

let obj1 = {
  title: "Calculadora",
  price: 1000,
  thumbnail: "image.pgn",
};

let obj2 = {
  title: "Calculadora2",
  price: 2000,
  thumbnail: "image.pgn",
};

const processFiles = (filename) => {
  try {
    fs.writeFile(filename, JSON.stringify([]), (err) => {
      if (err) throw new Error("Error escribiendo el archivo");
      fs.readFile(filename, "utf-8", (err, data) => {
        if (err) throw new Error("Error leyendo el archivo");
        obj1 = { ...obj1, id: 1 };
        data = JSON.parse(data);
        data.push(obj1);
        fs.writeFile(filename, JSON.stringify(data), (err) => {
          if (err) throw new Error("Error escribiendo el archivo");
          fs.readFile(filename, "utf-8", (err, data) => {
            if (err) throw new Error("Error leyendo el archivo");
            obj2 = { ...obj2, id: 2 };
            data = JSON.parse(data);
            data.push(obj2);
            fs.writeFile(filename, JSON.stringify(data), (err) => {
              if (err) throw new Error("Error escribiendo el archivo");
            });
          });
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

processFiles("fileInformation.txt");
