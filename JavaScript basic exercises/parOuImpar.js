//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro inteiro.

const parOuImpar = (numero) => {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
};
console.log(parOuImpar(10));

const checkLastCharacter = (string, char) => {
  const lastStringChar = string.substr(string.length - 1, string.length);
  return lastStringChar === char;
};

console.log(checkLastCharacter("iasmim", "m"));

// apanhar o ultimo caracter da minha string
