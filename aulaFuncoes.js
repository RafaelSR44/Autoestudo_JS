
function somaNumeros(a, b) {
  return a + b;
}

var resultado1 = somaNumeros(1, 2);
console.log(resultado1);

function verificaParidade(numero) {
  if (numero % 2 === 0) {
    return true;
  }
  return false;
}

var resultado2 = verificaParidade(5);
console.log(resultado2);

function calculaMedia(arrNum){
  var soma = 0;
  for (let i = 0; i < arrNum.length; i++){
    soma += arrNum[i];
  }
  return soma / arrNum.length;
}

var resultado3 = calculaMedia([1, 2, 3, 4, 5]);
console.log(resultado3);

