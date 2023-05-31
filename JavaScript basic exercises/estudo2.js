//JS Functions
/*ex015: function myFunction() {
  alert("Hello World!");
}
myFunction()
; */
/*ex014:  Escreva uma função que retorne o cubo de um número fornecido pelo usuário. 
let cubo = (num) => {
  return num * 3;
};
console.log(cubo(6));
*/
/*utilizaremos a recursão para retornar um array que contém os números inteiros 
que vão de n a 1, com base no parâmetro n. Se n for menor que 1, 
retorna um array vazio, senão, retorna os valores de n a 1. 
function contador(n) {
  if (n < 1) {
    return [];
  } else {
    let valores = contador(n)(n > 1);
    return valores;
  }
}

console.log(contador(20));*/
/*ex013: Realizada a primeira parte do exercício, replique o exercício 2 utilizando Arrow Function.
const descobreDiametro = (raio, diametro) => {
  return raio * diametro * Math.PI * radius;
};
console.log(Math.PI);
*/
/*ex012: criaremos uma função chamada descobreDiametro, onde receberemos 
um parâmetro chamado raio e um parâmetro chamado diametro. 
Dentro da função, retornaremos o resultado do seu diâmetro.
function descobreDiametro(raio, diametro) {
  return raio * diametro * Math.PI * radius;
}
console.log(Math.PI);

const descobreDiametro = (raio, diametro) => {
  return raio * diametro * Math.PI * radius;
};
console.log(Math.PI);
 */
/*ex011: Declare uma função comum, utilizando uma declaração ou expressão de função.
Essa nossa função deverá possuir dois parâmetros (name, lastName). 
A nossa função deve mostrar no console a seguinte frase: “Olá name lastName, eu sou uma função!”
function person(name, lastName) {
  console.log("Olá", ` ${name}, ${lastName}`, "eu sou uma função!");
  return `Olá, ${name} ${lastName}, eu sou uma função!`;
}
console.log(person("Alex", "Oliveira"));
*/
/*ex011.5Replicar o exercício anterior, utilizando Arrow Function. 
Utilize os mesmos parâmetros e retorne no console a mesma frase.
const person = (name, lastName) => {
  console.log(`Olá, ${name} ${lastName}, eu sou uma função!`);
};

person("Iasmim", "Capra");
*/

//JJS Operators
/*ex010: Use the correct assignment operator that will result in x being 15 (same as x = x + y).

const x = 10;
const y = 5;
const z = x + y;
console.log(z);
 */
/*ex009: Alert the remainder when 15 is divided by 9. 
const q = 15;
const w = 9;
const e = 15 % 9;
console.log(e);
*/
/*ex008: Divide 10 by 2, and alert the result:
const a = 10;
const b = 2;
const c = a / b;
console.log(c);
*/
/*ex007: Multiply 10 with 5, and alert the result:  

const x = 10;
const y = 5;
const z = x * y;
console.log(z);
*/

//Variables
/*ex006: On one single line, declare three variables with the following names and values:
var firstName = "John",
  lastName = "Doe",
  age = 35;
console.log(`${firstName}, ${lastName}, ${age}`);
*/
/*ex005: Create a variable called z, assign x + y to it, and display the result in an alert box.
var x = 5;
var y = 10;
var z = x + y;
alert(z);
*/
/*ex004: Display the sum of 5 + 10, using two variables: x and y.
var x = 5;
var y = 10;
var z = x + y;
console.log(z);
*/
/*ex003: Create a variable called x, assign the value 50 to it.

var x = 50;
console.log(x);
*/
/*ex002: Create a variable called carName, assign the value Volvo to it.

var carName = "Volvo";
console.log(carName);
*/
