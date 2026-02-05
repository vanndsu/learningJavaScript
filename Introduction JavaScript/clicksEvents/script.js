// Arrow function chamada quando o botão com addEventListener for clicado
// Essa função apenas exibe uma mensagem no console
const clicou = () => {
  console.log("Clicouuu!");
};

// Função tradicional
// Essa função é chamada pelo atributo onclick no HTML
function clique() {
  console.log("Clicouuu! onclick");
}

// Seleciona o elemento HTML que possui a classe "botao"
// querySelector retorna o primeiro elemento encontrado
let botao = document.querySelector(".botao");

// Adiciona um ouvinte de evento ao botão
// Quando o evento "click" acontecer, a função `clicou` será executada
botao.addEventListener("click", clicou);
