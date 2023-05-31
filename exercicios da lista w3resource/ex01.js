const now = new Date();
const daysOfWeek = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
const dayOfWeek = daysOfWeek[now.getDay()];
let hour = now.getHours(); //obtém a hora atual (0-23)
const amOrPm = hour >= 12 ? `PM` : `AM`; //verifica se é AM ou PM
hour = hour % 12 || 12; //converte a hora para o formato de 12 horas
const minutes = String(now.getMinutes()).padStart(2, `0`);
const seconds = String(now.getSeconds()).padStart(2, `0`); //pad para garantir os 2 digitos
console.log(`Today is: ${dayOfWeek}`);
console.log(`Current time is: ${hour} ${amOrPm} : ${minutes} : ${seconds}`);
