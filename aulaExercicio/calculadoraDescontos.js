function calculaDescontos(valor, desconto) {
  return valor - (valor * (desconto / 100));
}

function exibeContas(arrNum){
  for (let i = 0; i < arrNum.length; i++) {
    console.log(`🛒 ${arrNum[i].nome}`);
    console.log(`Preço Original: R$ ${arrNum[i].valor}`);
    console.log(`💰 Desconto: ${arrNum[i].desconto}%`);
    console.log(`✅ Preço com Desconto: R$ ${calculaDescontos(arrNum[i].valor, arrNum[i].desconto)} `);
    console.log('------------------- \n');
  }
}

var arrProdutos = [
  { nome: 'Produto 1', valor: 100, desconto: 10 },
  { nome: 'Produto 2', valor: 200, desconto: 20 },
  { nome: 'Produto 3', valor: 300, desconto: 30 },
  { nome: 'Produto 4', valor: 400, desconto: 40 },
  { nome: 'Produto 5', valor: 500, desconto: 50 }
];

exibeContas(arrProdutos);


// for (let key in arrProdutos) {
//   console.log(`🛒 ${arrProdutos[key].nome}`);
//   console.log(`Preço Original: R$ ${arrProdutos[key].valor}`);
//   console.log(`💰 Desconto: ${arrProdutos[key].desconto}%`);
//   console.log(`✅ Preço com Desconto: R$ ${calculaDescontos(arrProdutos[key].valor, arrProdutos[key].desconto)} `);
//   console.log('------------------- \n');
// }
