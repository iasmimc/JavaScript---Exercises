/* Melhora a tua função rollDice Para que esta aceite um array de objetos como argumento.
Este array de objetos vai contar com vários dados:
A tua missão é rodar e devolver todos os dados deste array*/

const rollDice = () => {
  const dice1 = Math.floor(Math.random() * (6 + 1 - 1) + 1);
  const dice2 = Math.floor(Math.random() * (6 + 1 - 1) + 1);
  return `your dice roll is ${dice1} and ${dice2}`;
};
console.log(rollDice());
