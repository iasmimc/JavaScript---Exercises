const nome = (numero1, numero2) => {
  if (numero1 === 100 || numero2 === 100) {
    return true;
  } else if (numero1 + numero2 === 100) {
    return true;
  } else {
    return false;
  }
};

//caso o numero1 ou numero2 seja igual a 100 devolve true se nao false
// transformar em um ternario (são 3 linhas de codigo)
