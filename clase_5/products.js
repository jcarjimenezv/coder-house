const products = [
  { id: 1, name: "Escuadra", price: 323.45 },
  { id: 2, name: "Calculadora", price: 234.56 },
  { id: 3, name: "Globo Terráqueo", price: 45.67 },
  { id: 4, name: "Paleta Pintura", price: 456.78 },
  { id: 5, name: "Reloj", price: 67.89 },
  { id: 6, name: "Agenda", price: 78.9 },
];

const getProductNames = (products = []) =>
  products.map((product) => product.name).join(", ");

const getTotalPrice = (products = []) =>
  products.reduce((acumulator, product) => acumulator + product.price, 0);

const getPriceAverage = (totalPrice, quantity = 0) =>
  parseFloat(totalPrice / quantity).toFixed(2);

const getMinValue = (products = []) =>
  products.reduce(
    (min, curr) => (curr.price < min.price ? curr : min),
    products[0]
  );

const getMaxValue = (products = []) =>
  products.reduce(
    (max, curr) => (curr.price > max.price ? curr : max),
    products[0]
  );

const productsInformation = {
  productNames: getProductNames(products),
  totalPrice: Number(parseFloat(getTotalPrice(products)).toFixed(2)),
  average: Number(
    getPriceAverage(
      parseFloat(getTotalPrice(products)).toFixed(2),
      products.length
    )
  ),
  minValue: getMinValue(products),
  maxValue: getMaxValue(products),
};

console.log(productsInformation);
