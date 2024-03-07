async function getUserInfo() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    nome: "Julia",
    idade: 30,
    email: "julia@exemplo.com",
  };
}

async function mostrarInfoUsuario() {
  try {
    const userInfo = await getUserInfo();

    console.log("Informações do usuário:");
    console.log("Nome:", userInfo.nome);
    console.log("Idade:", userInfo.idade);
    console.log("Email:", userInfo.email);
  } catch (error) {
    console.error("Ocorreu um erro ao obter as informações do usuário:", error);
  }
}

mostrarInfoUsuario();
