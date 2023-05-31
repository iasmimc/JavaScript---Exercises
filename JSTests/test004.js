const gato = (numero1, numero2) => {
  return numero1 === 100 || numero2 === 100 || numero1 + numero2 === 100
    ? true
    : false;
};
console.log(gato(50, 50));

//caso o numero1 ou numero2 seja igual a 100 devolve true se nao false. Usar arrow function.
