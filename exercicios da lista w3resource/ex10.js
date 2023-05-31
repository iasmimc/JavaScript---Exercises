//Escreva um programa JavaScript para calcular a multiplicação e a divisão de dois números (informações do usuário).

let multiplyBy = () => {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 * num2;
};

let divideBy = () => {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 / num2;
};
