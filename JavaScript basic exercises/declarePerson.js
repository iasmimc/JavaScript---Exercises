/*Declare a common function using a function declaration or expression.
This function of ours must have two parameters (name, lastName).
Our function should display the following sentence in the console: “Hello name lastName, I am a function!” */

function person(name, lastName) {
  console.log("Olá", ` ${name}, ${lastName}`, "eu sou uma função!");
  return `Olá, ${name} ${lastName}, eu sou uma função!`;
}
console.log(person("Alex", "Oliveira"));
