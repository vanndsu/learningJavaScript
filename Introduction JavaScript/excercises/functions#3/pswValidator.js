// ==============================
// 🔐 VALIDADOR DE USUÁRIO E SENHA
// ==============================
//
// 💡 OBJETIVO:
// Verificar se o usuário e a senha informados são válidos.
// Credenciais corretas:
// - Usuário → "Pedro"
// - Senha → "123"
//

function validator(user, psw) {
  // A função retorna diretamente o resultado da comparação lógica:
  // Retorna TRUE se (user === "pedro" E psw === "123"), senão FALSE.
  return user === "pedro" && psw === "123";
}

// ==============================
// 🧩 DADOS INSERIDOS PELO USUÁRIO
// ==============================

// Simulando entrada do usuário:
// Aqui usamos `trim()` para remover espaços extras
// e `toLocaleLowerCase()` para deixar tudo minúsculo (evita erro de digitação)
let user = " Pedro ".trim().toLocaleLowerCase();

// Senha digitada
let psw = "123";

// Chamamos a função passando user e psw.
// O resultado (true ou false) é armazenado em `verification`.
let verification = validator(user, psw);

// ==============================
// 🖨️ EXIBINDO O RESULTADO
// ==============================

// Se as credenciais forem válidas:
if (verification) {
  console.log("✅ Login realizado com sucesso!");
} else {
  console.log("❌ Usuário ou senha incorretos.");
}

// 🧾 SAÍDA ESPERADA:
// ✅ Login realizado com sucesso!
