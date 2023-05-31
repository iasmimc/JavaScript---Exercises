// uma função que verifica se um número  é primo ou não.

const prime = (number) => {
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};
console.log(prime(7));
