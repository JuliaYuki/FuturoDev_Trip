async function fetchData() {
  try {
    const response = await fetch("data.json");

    if (!response.ok) {
      throw new Error("Erro ao obter o arquivo JSON");
    }

    const jsonData = await response.json();

    const userInfoDiv = document.getElementById("userInfo");
    userInfoDiv.innerHTML = `
          <p><strong>Nome:</strong> ${jsonData.nome}</p>
          <p><strong>Idade:</strong> ${jsonData.idade}</p>
          <p><strong>Email:</strong> ${jsonData.email}</p>
        `;
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

fetchData();
