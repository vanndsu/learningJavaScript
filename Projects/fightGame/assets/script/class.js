// Classe base para todos os personagens do jogo
export class Character {
  // Vida atual (privada por convenção)
  _life = 1;

  // Vida máxima
  maxLife = 1;

  // Atributos de combate
  attack = 0;
  defense = 0;

  // Construtor recebe o nome do personagem
  constructor(name) {
    this.name = name;
  }

  // Getter para acessar a vida atual
  get life() {
    return this._life;
  }

  // Setter para definir a vida atual
  // Garante que a vida nunca seja menor que 0
  set life(newLife) {
    this._life = newLife < 0 ? 0 : newLife;
  }
}

// Classe Knight (Cavaleiro), herda de Character
export class Knight extends Character {
  constructor(name) {
    super(name); // Chama o construtor da classe pai
    this.life = 100;
    this.attack = 10;
    this.defense = 8;
    this.maxLife = this.life;
  }
}

// Classe Sorcerer (Feiticeiro), herda de Character
export class Sorcerer extends Character {
  constructor(name) {
    super(name);
    this.life = 80;
    this.attack = 15;
    this.defense = 3;
    this.maxLife = this.life;
  }
}

// Classe LittleMonster (monstro fraco), herda de Character
export class littleMonster extends Character {
  constructor() {
    super("Little Monster");
    this.life = 80;
    this.attack = 8;
    this.defense = 5;
    this.maxLife = this.life;
  }
}

// Classe Monster (monstro forte), herda de Character
export class Monster extends Character {
  constructor() {
    super("Monster");
    this.life = 110;
    this.attack = 8;
    this.defense = 9;
    this.maxLife = this.life;
  }
}

// Classe Stage controla o combate e a interface
export class Stage {
  // Recebe os lutadores e seus elementos HTML
  constructor(fighter1, fighter2, fighter1El, fighter2El) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
  }

  // Inicia o combate
  start() {
    // Atualiza a interface inicialmente
    this.update();

    // Evento de ataque do lutador 1
    this.fighter1El
      .querySelector(".attack-button")
      .addEventListener("click", () =>
        this.doAttack(this.fighter1, this.fighter2),
      );

    // Evento de ataque do lutador 2
    this.fighter2El
      .querySelector(".attack-button")
      .addEventListener("click", () =>
        this.doAttack(this.fighter2, this.fighter1),
      );
  }

  // Atualiza nomes, HP e barras de vida
  update() {
    // Fighter 1
    this.fighter1El.querySelector(".name").innerHTML =
      `${this.fighter1.name} - ${this.fighter1.life.toFixed(0)} HP`;

    // Calcula a porcentagem de vida
    let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    this.fighter1El.querySelector(".bar").style.width = `${f1Pct}%`;

    // Fighter 2
    this.fighter2El.querySelector(".name").innerHTML =
      `${this.fighter2.name} - ${this.fighter2.life.toFixed(0)} HP`;

    // Calcula a porcentagem de vida
    let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;

    // Atualiza a barra de vida
    this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`;
  }

  // Executa o ataque entre personagens
  doAttack(attacking, attacked) {
    if (attacked.life <= 0) {
      console.log("Atacando cachorro morto");
      return;
    }
    let attackFactor = (Math.random() * 2).toFixed(2);
    let defenseFactor = (Math.random() * 2).toFixed(2);

    let actualAttack = attacking.attack * attackFactor;
    let actualDefense = attacked.defense * defenseFactor;
    console.log(actualAttack.toFixed(2));
    console.log("defesa: " + actualDefense.toFixed(2));

    if (actualAttack > actualDefense) {
      attacked.life -= actualAttack;

      console.log(
        `${attacked.name} causou ${actualAttack} de dano em ${attacked.name}`,
      );
    } else {
      console.log(`${attacked.name} conseguiu defender`);
    }

    // Atualiza a interface após o ataque
    this.update();
  }
}

class Log{

  list = [];
  
}