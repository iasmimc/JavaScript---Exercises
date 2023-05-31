// escrever uma função que vai aceitar um array de numeros como um argumento
const organizador = (b) => {
  let arrCopy = [...b];
  return arrCopy.sort((a, b) => {
    return a - b;
  });
};
console.log(organizador([244, 1, 5, 700]));
