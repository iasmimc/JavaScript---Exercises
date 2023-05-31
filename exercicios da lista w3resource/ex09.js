//9. Write a JavaScript program to calculate the days left before Christmas.

today = new Date();
const calculateDaysBCristmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
  calculateDaysBCristmas.setFullYear(calculateDaysBCristmas.getFullYear() + 1);
}
var oneDay = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((calculateDaysBCristmas.getTime() - today.getTime()) / oneDay) +
    "days left until cristmas!"
);
