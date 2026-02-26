// Função chamada quando o botão é clicado
function clicou() {

  // Seleciona o elemento com id "teste"
  let teste = document.querySelector("#teste");

  // Exibe no console o elemento inteiro selecionado
  console.log(teste);

  // Exibe o segundo filho direto da div #teste
  // children[1] → neste caso, o <strong>
  console.log(teste.children[1]);

  // Exibe os filhos do primeiro filho da div #teste
  // teste.children[0] → <ol>
  // .children → todos os <li> dentro do <ol>
  console.log(teste.children[0].children);

  // Seleciona o elemento <ol> que está dentro da div #teste
  const ol = teste.querySelector("ol");

  // Adiciona um novo <li> ao final da lista usando innerHTML
  ol.innerHTML += "<li>Mais um item</li>";

  // Altera o texto do primeiro <li>
  // innerText trata tudo como TEXTO, ignorando tags HTML
  ol.children[0].innerText = "Alterado <strong>negrito</strong>";

  // Altera o conteúdo do segundo <li>
  // innerHTML interpreta as tags HTML
  ol.children[1].innerHTML = "Alterado <strong>negrito</strong>";

  // Exibe no console o HTML COMPLETO do elemento <ol>,
  // incluindo a própria tag <ol> e seus filhos
  console.log(ol.outerHTML);

  // Se essa linha for descomentada,
  // o elemento <ol> será removido da página
  // ol.outerHTML = 'Sumiu'
}
