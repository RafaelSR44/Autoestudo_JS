// cap 6 - pag 112, cap 9 - pag 193
class Produto {
  constructor(){
    this.id=0;
    this.nomeProduto='';
    this.valor=0;
  }

  adicionar(){
    alert('Vamos adicionar um produto');
  }

  excluir(){
    alert('Item Deletado');
  }
}

var produto = new Produto();

/* 
  Estou com dificuldade de entender as funcionalidades do JS
  Object.prototype
  Object.create()
  inherit()
*/
var customer = Object.create(Object.prototype, {
  'first name': {value: 'Fernando', enumerable: true, writable: true},
  'last name': {value: 'Daciuk', enumerable: true, writable: true},
  'address0': {value: 'Rua 1', enumerable: true, writable: true},
  'address1': {value: 'Rua 2', enumerable: true, writable: true},
  'address2': {value: 'Rua 3', enumerable: true, writable: true},
  'address3': {value: 'Rua 4', enumerable: true, writable: true}
});

var addr = ""; 
  for(i = 0; i < 4; i++)
    addr += customer["address" + i] + '\n';
  