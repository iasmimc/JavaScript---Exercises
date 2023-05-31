/*Escreva uma função que permita contar o número de vogais contidas em uma 
string fornecida pelo usuário. Por exemplo, o usuário informa a string “Beterraba”, 
e a função retorna o número 4 (há 4 vogais nessa palavra). */

const vowels = (text) => text.match(/[aeiou]/gi).length;
console.log(vowels("JavaScript"));
