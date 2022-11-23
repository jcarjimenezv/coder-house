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

const processFiles = async (filename) => {
  try {
    await fs.promises.writeFile(filename, JSON.stringify([]));
    let data = await fs.promises.readFile(filename, "utf-8");
    data = JSON.parse(data)
    obj1 = { ...obj1, id: 1 };

    data.push(obj1);
    await fs.promises.writeFile(filename, JSON.stringify(data));
    data = await fs.promises.readFile(filename, "utf-8");
    data = JSON.parse(data)
    obj2 = { ...obj2, id: 1 };
    data.push(obj2);
    await fs.promises.writeFile(filename, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

processFiles("fileInformation.txt");
