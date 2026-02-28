// Classe base para todos os personagens do jogo.
// Qualquer personagem que criarmos vai herdar daqui.
export class Character {
  // Vida do personagem. O underscore é uma convenção antiga
  // pra indicar que esse campo não deve ser acessado diretamente de fora.
  _life = 1;

  // Guarda o valor máximo de vida, usado pra calcular a porcentagem da barra.
  maxLife = 1;

  // Poder de ataque do personagem.
  attack = 0;

  // Poder de defesa do personagem.
  defense = 0;

  // Recebe o nome do personagem ao criar uma instância.
  constructor(name) {
    // Garante que o nome seja uma string não vazia antes de prosseguir.
    if (!name || typeof name !== "string") {
      throw new Error("Character name must be a non-empty string.");
    }

    // Salva o nome no objeto.
    this.name = name;
  }

  // Getter que expõe o valor de _life.
  // Quem ler character.life vai cair aqui.
  get life() {
    return this._life;
  }

  // Setter chamado toda vez que alguém faz character.life = valor.
  // Impede que a vida fique negativa — se o valor for menor que zero, guarda zero.
  set life(newLife) {
    this._life = newLife < 0 ? 0 : newLife;
  }
}

// Knight é um personagem jogável. Herda tudo de Character
// e define seus próprios atributos de combate.
export class Knight extends Character {
  constructor(name) {
    // Obrigatório chamar super() antes de usar this em qualquer subclasse.
    super(name);

    // Cavaleiro tem bastante vida e uma defesa sólida.
    this.life = 100;
    this.attack = 10;
    this.defense = 8;

    // Registra a vida máxima com o valor que acabou de ser definido.
    this.maxLife = this.life;
  }
}

// Sorcerer troca parte da vida e defesa por um ataque mais alto.
export class Sorcerer extends Character {
  constructor(name) {
    super(name);

    // Menos vida que o cavaleiro, mas ataca mais forte.
    this.life = 80;
    this.attack = 15;
    this.defense = 3;
    this.maxLife = this.life;
  }
}

// Inimigo fraco. Não precisa de nome dinâmico, então o nome é fixo no super().
export class LittleMonster extends Character {
  constructor() {
    super("Little Monster");

    // Atributos mais modestos — é o inimigo mais fácil do jogo.
    this.life = 80;
    this.attack = 8;
    this.defense = 5;
    this.maxLife = this.life;
  }
}

// Inimigo mais resistente. Mais vida e defesa que o LittleMonster.
export class Monster extends Character {
  constructor() {
    super("Monster");

    // Bem mais durável, especialmente pela defesa alta.
    this.life = 110;
    this.attack = 8;
    this.defense = 9;
    this.maxLife = this.life;
  }
}

// Stage controla o fluxo de uma batalha entre dois personagens.
// Também cuida de atualizar a interface conforme o estado muda.
export class Stage {
  // Recebe os dois lutadores e os elementos HTML correspondentes,
  // além do objeto de log pra registrar o que acontece na batalha.
  constructor(fighter1, fighter2, fighter1El, fighter2El, log) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
    this.log = log;
  }

  start() {
    // Renderiza o estado inicial dos dois lutadores antes de qualquer clique.
    this.update();

    // Quando o botão de ataque do fighter1 for clicado,
    // ele ataca o fighter2.
    this.fighter1El
      .querySelector(".attack-button")
      .addEventListener("click", () =>
        this.doAttack(this.fighter1, this.fighter2),
      );

    // Mesma coisa pro fighter2 — ele ataca o fighter1.
    this.fighter2El
      .querySelector(".attack-button")
      .addEventListener("click", () =>
        this.doAttack(this.fighter2, this.fighter1),
      );
  }

  // Atualiza o nome, o HP exibido e a largura da barra de vida de um lutador.
  updateFighterUI(fighter, el) {
    // Mostra o nome e a vida atual arredondada no elemento de texto.
    el.querySelector(".name").textContent =
      `${fighter.name} - ${fighter.life.toFixed(0)} HP`;

    // Calcula quantos por cento da vida ainda restam.
    let fPct = (fighter.life / fighter.maxLife) * 100;

    // Aplica essa porcentagem como largura da barra visual.
    el.querySelector(".bar").style.width = `${fPct}%`;
  }

  // Atualiza a UI dos dois lutadores de uma vez.
  update() {
    this.updateFighterUI(this.fighter1, this.fighter1El);
    this.updateFighterUI(this.fighter2, this.fighter2El);
  }

  // Processa um turno de ataque: quem ataca, quem é atacado.
  doAttack(attacking, attacked) {
    // Se o alvo já está sem vida, não faz sentido atacar — registra e sai.
    if (attacked.life <= 0) {
      this.log.addMessage(`${attacked.name} já morreu...`);
      return;
    }
    // Se o atacante já está sem vida, não faz sentido atacar — registra e sai.
    if (attacking.life <= 0) {
      this.log.addMessage(`${attacking.name} já morreu, não pode atacar...`);
      return;
    }

    // Gera um fator de ataque aleatório entre 1 e 3.
    // Isso deixa o dano variável a cada turno.
    let attackFactor = (0.5 + Math.random()) * 2;

    // Mesmo esquema pro fator de defesa — o defensor também tem uma variação.
    let defenseFactor = (0.5 + Math.random()) * 2;

    // Calcula o ataque e a defesa reais multiplicando os atributos pelos fatores.
    let actualAttack = attacking.attack * attackFactor;
    let actualDefense = attacked.defense * defenseFactor;

    // Registra os valores no console pra facilitar o acompanhamento durante o desenvolvimento.
    console.log(actualAttack.toFixed(2));
    console.log("defesa: " + actualDefense.toFixed(2));

    // Se o ataque superou a defesa, o dano é aplicado.
    if (actualAttack > actualDefense) {
      // Subtrai o dano da vida do atacado. O setter garante que não vai abaixo de zero.
      attacked.life -= actualAttack;

      // Registra no log quem atacou quem e quanto dano causou.
      this.log.addMessage(
        `${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`,
      );
    } else {
      // A defesa foi suficiente — nenhum dano aplicado.
      this.log.addMessage(`${attacked.name} conseguiu defender`);
    }

    // Atualiza a interface pra refletir o novo estado após o ataque.
    this.update();
  }
}

// Log cuida exclusivamente de exibir as mensagens de combate na tela.
export class Log {
  // Recebe o elemento de lista HTML onde as mensagens serão inseridas.
  constructor(listEl) {
    this.listEl = listEl;
  }

  // Adiciona uma nova mensagem como item de lista no final do elemento.
  addMessage(msg) {
    this.listEl.insertAdjacentHTML("beforeend", `<li>${msg}</li>`);
  }
}
