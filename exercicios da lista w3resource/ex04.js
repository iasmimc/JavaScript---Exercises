//definir os comprimentos dos lados do triângulo
const side1 = 5;
const side2 = 6;
const side3 = 7;
//Calcular o semiperimetro do triângulo
const semiperimeter = (side1 + side2 + side3) / 2;
//Calcular a area do triângulo usando a formula de Heron
const area = Math.sqrt(
    semiperimeter *
    (semiperimeter - side1) *
    (semiperimeter - side2) *
    (semiperimeter - side3)
);
console.log(`The area of the triangle is ${area}`);