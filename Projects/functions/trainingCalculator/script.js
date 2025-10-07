/*🎯 PROJETO PRÁTICO: CALCULADORA DE TREINO
📝 CONTEXTO DO PROJETO
Você vai criar uma calculadora para academia que calcula diferentes métricas de treino usando funções!

🎨 O QUE VOCÊ VAI CONSTRUIR
Uma aplicação que calcula:

IMC (Índice de Massa Corporal)
TMB (Taxa Metabólica Basal - calorias que você queima em repouso)
Calorias totais (baseado no nível de atividade)
Níveis: sedentário (TMB × 1.2), leve (TMB × 1.375), moderado (TMB × 1.55), intenso (TMB × 1.725)
Consumo de água recomendado*/

function imc(weight, height) {
  let imc = weight / (height * height);
  return imc.toFixed(2);
}
function tmb(weight, height, age) {
  let men = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
  //Fórmula mulher: 447.6 + (9.2 × peso) + (3.1 × altura em cm) - (4.3 × idade)
  return men.toFixed(2);
}
function totalCalories(tmb, activityLevel) {
  let totalCalories = tmb * activityLevel;

  return totalCalories.toFixed(2);
}
function waterCalculate(weight) {
  total = weight * 35;

  return total;
}
console.log(imc(74, 1.8));
let tmbCall = tmb(74, 180, 25);
console.log(tmbCall);
console.log(totalCalories(tmbCall, 1.2));
console.log(waterCalculate(76) + "ml");
