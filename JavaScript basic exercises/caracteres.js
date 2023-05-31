/*Escreva uma função em JavaScript que conte quantas vezes um 
caractere aparece em uma string.  */

const str = "este texto possui a palavra texto";
const caractere = (str.match(/texto/g) || []).length;

console.log(caractere);
