/*Melhora a tua função rollDice Para que esta aceite um array de objetos como argumento.
Este array de objetos vai contar com vários dados:
A tua missão é rodar e devolver todos os dados deste array*/

const dice = [
  { type: "d5", faces: 5 },
  { type: "d10", faces: 10 },
  { type: "d6", faces: 6 },
  { type: "d2", faces: 2 },
];

const rollDiceList = (diceArray) => {
  for (let i = 0; i < diceArray.length; i++) {
    let diceRoll = Math.floor(Math.random() * diceArray[i].faces + 1);

    console.log(`your dice rolled a ${diceRoll}`);
  }
};
rollDiceList(dice);
