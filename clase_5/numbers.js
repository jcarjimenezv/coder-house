const getNumberRandom = (max) => parseInt(Math.random() * max) + 1;

const processNumbers = (max, quantity, func) => {
  const numbersObj = {};
  for (let i = 0; i < quantity; i++) {
    const numero = getNumberRandom(max);
    if (!numbersObj[numero]) {
      numbersObj[numero] = 0;
    }
    numbersObj[numero]++;
  }
  func(numbersObj)  
};

const printNumbers = (numbersObj) => console.log('Numbers ', numbersObj)

processNumbers(10, 10000, printNumbers)