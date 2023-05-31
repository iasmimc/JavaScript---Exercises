/*Faça um programa JavaScript que receba 3 números informados pelo usuário e em 
seguida apresente uma mensagem de alerta informando qual é o maior número dentre os números informados. */

const number = (numero1, numero2, numero3) => {
  let maiorNumero = numero1;
  if (numero2 > maiorNumero) {
    maiorNumero = numero2;
  }
  if (numero3 > maiorNumero) {
    maiorNumero = numero3;
  }
  return maiorNumero;
};

console.log(number(2, 3, 4));
