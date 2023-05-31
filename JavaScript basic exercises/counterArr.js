//we will use recursion to return an array that contains the integers
// ranging from n to 1, based on parameter n. If n is less than 1,
// returns an empty array, otherwise, returns the values ​​from n to 1.

function counter(n) {
  if (n < 1) {
    return [];
  } else {
    let valores = counter(n)(n > 1);
    return valores;
  }
}
console.log(counter);
