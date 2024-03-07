function solicitarInformacoesUsuario() {
  const nome = prompt("Digite seu nome:");
  const idade = prompt("Digite sua idade:");
  const email = prompt("Digite seu email:");

  const userInfo = {
    name: nome,
    age: idade,
    email: email,
  };

  localStorage.setItem("user", JSON.stringify(userInfo));

  console.log("Informações do usuário foram salvas no localStorage.");
}

solicitarInformacoesUsuario();
