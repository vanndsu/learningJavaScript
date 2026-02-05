// ==============================
// 🏠 PROPERTY PRICE CALCULATOR (Calculadora de preço de imóvel)
// ==============================
//
// 💡 REGRAS DO PROJETO:
// - Valor base do metro quadrado (m²): R$ 3.000
// - Se o imóvel tiver:
//   → 1 quarto → m² = 1x
//   → 2 quartos → m² = 1.2x
//   → 3 quartos → m² = 1.5x
//
// O objetivo é calcular o valor total do imóvel
// com base na metragem e na quantidade de quartos.
//

// Criamos uma função chamada `propertyPrice`
// que recebe dois parâmetros:
// - size (metragem em m²)
// - rooms (quantidade de quartos)
function propertyPrice(size, rooms) {
  // Definimos o valor base do metro quadrado
  let squareMeter = 3000;

  // Criamos uma variável para armazenar o preço final
  let price = 0;

  // ==============================
  // Versão alternativa com IF (comentada)
  // ==============================
  /*
  if (rooms === 1) {
    return size * squareMeter;
  } else if (rooms === 2) {
    return size * (squareMeter * 1.2);
  } else if (rooms === 3) {
    return size * (squareMeter * 1.5);
  } else {
    return "Invalid number of rooms!";
  }
  */

  // ==============================
  // Versão com SWITCH (organizada e fácil de ler)
  // ==============================
  switch (rooms) {
    // Caso o imóvel tenha 1 quarto:
    // o valor do m² é o valor base (1x)
    case 1:
      price = squareMeter * size;
      break;

    // Caso o imóvel tenha 2 quartos:
    // o valor do m² é 20% maior (1.2x)
    case 2:
      price = squareMeter * 1.2 * size;
      break;

    // Caso o imóvel tenha 3 quartos:
    // o valor do m² é 50% maior (1.5x)
    case 3:
      price = squareMeter * 1.5 * size;
      break;

    // Caso o número de quartos seja inválido:
    default:
      return "Invalid number of rooms!";
  }

  // Retornamos o preço calculado
  return price;
}

// ==============================
// 🔢 DEFININDO OS DADOS DO IMÓVEL
// ==============================

// rooms → número de quartos
// size → metragem total do imóvel
let rooms = 3;
let size = 123;

// Chamamos a função e guardamos o resultado em `totalPrice`
let totalPrice = propertyPrice(size, rooms);

// ==============================
// 💰 EXIBINDO O RESULTADO
// ==============================

// Usamos `toLocaleString("pt-BR")` para formatar o valor em reais
console.log(`O preço do imóvel é: R$ ${totalPrice.toLocaleString("pt-BR")}`);

// 🧾 SAÍDA ESPERADA:
// O preço do imóvel é: R$ 553.500
