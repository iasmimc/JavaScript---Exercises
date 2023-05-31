/*. Escreva um programa JavaScript para testar se uma matriz de inteiros de comprimento 2 contém 1 ou 3.   */

const mNumInt = (nums) => {
  if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1) {
    return true;
  } else {
    return false;
  }
};
console.log(mNumInt([1, 2]));
console.log(mNumInt([6, 5]));
console.log(mNumInt([8, 9]));
