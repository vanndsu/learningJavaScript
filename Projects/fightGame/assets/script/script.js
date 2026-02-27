// Importa as classes necessárias do arquivo class.js
import { Knight, Monster, littleMonster, Stage } from './class.js';

// Cria o personagem do jogador (um Cavaleiro)
let char = new Knight("Douglas");

// Cria o inimigo (um monstro pequeno)
let monster = new littleMonster();

// Exibe no console o nome do personagem criado
console.log(char.name);

// Cria o palco da batalha (Stage)
// Parâmetros:
// 1) Personagem do jogador
// 2) Inimigo
// 3) Elemento HTML do personagem (#char)
// 4) Elemento HTML do inimigo (#monster)
const stage = new Stage(
  char,
  monster,
  document.querySelector('#char'),
  document.querySelector('#monster')
);

// Inicia a batalha, configurando eventos e atualizando a interface
stage.start();
