class Carta {
  constructor(valor, naipe) {
    this.valor = valor;
    this.naipe = naipe;
    this.carta = `Sua carta é ${this.getValor()} de ${this.getNaipe()}`
  }

  getValor() {
    switch (true) {
      case this.valor == 1:
        return "A";
      case this.valor <= 10:
        return this.valor;
      case this.valor == 11:
        return "Q";
      case this.valor == 12:
        return "J";
      case this.valor == 13:
        return "K";
    }
  }

  getNaipe() {
    switch (true) {
      case this.naipe == 1:
        return "Ouros";
      case this.naipe == 2:
        return "Espadas";
      case this.naipe == 3:
        return "Copas";
      case this.naipe == 4:
        return "Paus";
    }
  }

  getCarta() {
    return this.carta;
  }
}

for (let i = 1; i <= 13; i++) {
  for (let j = 1; j <= 4; j++) {
    var carta = new Carta(i, j);
    console.log(`${carta.getCarta()}`);
  }
}


class Baralho {
  constructor() {
    this.cartas = [];
  }

  criarBaralho() {
    for (let i = 1; i <= 13; i++) {
      for (let j = 1; j <= 4; j++) {
        this.cartas.push(new Carta(i, j));
      }
    }
  }

}