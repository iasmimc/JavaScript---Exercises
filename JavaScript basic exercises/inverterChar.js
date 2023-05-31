//Dada uma sequência de caracteres, inverta o seu conteúdo e apresente ao usuário o resultado invertido.

const invertedChar = (char) => {
  return String(char).split("").reverse().join("");
};
console.log(invertedChar(" ler"));
