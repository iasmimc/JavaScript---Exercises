/* Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string.
 Tanto o caractere quanto a string devem ser fornecidos pelo usuário.
 */

let ocorrencias = 0;
let busca = "p";
let minhaString = "Maria foi na padaria";

for (let i = 0, j = minhaString.length; i < j; i++) {
  if (minhaString[i].toLowerCase() == busca) {
    ocorrencias++;
  }
}

console.log(`Foram encontradas ${ocorrencias} letras "${busca}"`);
