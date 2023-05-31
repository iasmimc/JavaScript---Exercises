/*Write a function that displays a number provided by the user, but inverted.
 For example, the user provides the number 875 
 and the function displays the number 578 on the screen. */

const invertedNumber = (num) => {
  return Number(String(num).split("").reverse().join(""));
};
console.log(invertedNumber(987));
