let i;
for (i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

let j;
for (j = 0; j < 10; j++) {
  console.log();
  if (j == 5) {
    break;
  }
}

let b = 0;
while (b < 10) {
  console.log(b);
  b = b + 2;
}

let a = 0;
while (a < 10) {
  console.log(a);
  a++;
}

const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}

let z;
for (z = 0; z < 10; z++) {
  console.log(z);
}

const fruits2 = "Apple";

switch (fruits2) {
  case "Banana":
    console.log("Hello");
    break;
  case "Apple":
    console.log("Welcome");
    break;
}

const x = 25;
y = 10;
if (x > y) {
  console.log("Hello World");
} else {
  console.log("Goodbye");
}

var age = 22;
var voteable = age < 18 ? "Too young" : "Old enough";
console.log(voteable);

let squareRoot = Math.sqrt(9);
console.log(squareRoot);

let rounding = Math.round(5.3);
console.log(rounding);

x = Math.max(10, 20);
console.log(x);

let r = Math.random();
console.log(r);

const d = new Date();
d.setFullYear(2020);
console.log(d);

const month = new Date();
month = month.getMonth();
console.log(month);

const year = new Date();
year = year.getFullYear();
console.log(year);

const date = new Date("23/05/2023");
alert(date);
