/*Crie um programa em JavaScript que peça ao usuário (via prompt) idade e nacionalidade.
Depois:

Verifique se a pessoa pode votar no Brasil:

Tem 16 anos ou mais

E a nacionalidade é "brasileira"

Verifique se a pessoa precisa votar obrigatoriamente:

Tem entre 18 e 70 anos

E a nacionalidade é "brasileira"

Caso contrário, mostre que a pessoa não pode votar no Brasil.*/

let idade = 15;
let nacionalidade = "br";

//maneira mais extensa
/*
if (nacionalidade == "BR") {
  if (idade >= 18) {
    if (idade <= 70) {
      console.log("Obrigatório votar");
    }
  } else if (idade >= 16) {
    if (idade <= 17) {
      console.log("Voto Opcional");
    }
  }
} else {
  console.log("Não pode votar");
}
*/
//Maneira mais elegante

if (
  nacionalidade == "BR" ||
  (nacionalidade == "br" && idade < 16 && idade > 70)
) {
  if (idade >= 18 && idade <= 70) {
    console.log("Voto obrigatório");
  } else if (idade >= 16 && idade <= 17) {
    console.log("Voto Opcional");
  }
} else {
  console.log("Não pode votar");
}
