// Função que busca endereço a partir de um CEP informado pelo usuário.
function buscarEndereco(cepsAnteriores) {
  // Solicita ao usuário que digite um CEP.
  const cep = prompt("Digite o CEP (apenas números):");
  if (cep) {
    // Verifica se um CEP foi fornecido.
    // Verifica se o CEP já foi pesquisado anteriormente.
    if (cepsAnteriores.includes(cep)) {
      alert("Este CEP já foi pesquisado. Por favor, informe um CEP diferente.");
      return; // Interrompe a função se o CEP já foi usado.
    }

    // Realiza a requisição à API do ViaCEP com o CEP informado.
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((response) => response.json()) // Converte a resposta para JSON.
      .then((data) => {
        if (data.erro) {
          // Verifica se ocorreu algum erro na resposta.
          alert("CEP não encontrado. Tente novamente.");
        } else {
          // Processa os dados de endereço se não houve erro.
          // Formata o endereço para uma string legível.
          const enderecoFormatado = `${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`;
          // Recupera os endereços já salvos do localStorage, ou inicializa um array vazio.
          let enderecos = localStorage.getItem("enderecos");
          enderecos = enderecos ? JSON.parse(enderecos) : [];

          // Verifica se o novo endereço já está na lista de endereços salvos.
          if (!enderecos.includes(enderecoFormatado)) {
            // Pede confirmação do usuário sobre a correção do endereço.
            const confirmacao = confirm(
              `O endereço está correto? \n${enderecoFormatado}`
            );
            if (confirmacao) {
              // Se o usuário confirmar, salva o novo endereço.
              enderecos.push(enderecoFormatado); // Adiciona o novo endereço ao array.
              localStorage.setItem("enderecos", JSON.stringify(enderecos)); // Salva o array atualizado no localStorage.
              alert("Endereço salvo com sucesso!");
              // Adiciona o CEP aos já pesquisados e atualiza no localStorage.
              cepsAnteriores.push(cep);
              localStorage.setItem(
                "cepsAnteriores",
                JSON.stringify(cepsAnteriores)
              );
            }
          } else {
            alert("Este endereço já foi adicionado anteriormente.");
          }
        }
      })
      .catch((error) => {
        // Captura erros na requisição à API.
        console.error("Erro ao buscar CEP:", error);
        alert("Houve um erro ao buscar o CEP. Por favor, tente novamente.");
      });
  }
}

// Função chamada quando a página é carregada.
document.addEventListener("DOMContentLoaded", function () {
  // Recupera a lista de CEPs já pesquisados do localStorage, ou inicializa como um array vazio.
  let cepsAnteriores = JSON.parse(localStorage.getItem("cepsAnteriores")) || [];

  // Associa a função de buscar endereço ao botão de busca de CEP.
  const buscarCepBtn = document.getElementById("buscarCepBtn");
  if (buscarCepBtn) {
    buscarCepBtn.addEventListener("click", () =>
      buscarEndereco(cepsAnteriores)
    );
  }

  // Verifica se já existem endereços salvos e pergunta se o usuário quer buscar um novo endereço.
  let realizarBusca = true;
  let enderecos = localStorage.getItem("enderecos");
  if (enderecos) {
    enderecos = JSON.parse(enderecos);
    realizarBusca = confirm(
      "Já existem endereços salvos. Deseja buscar um novo endereço?"
    );
  }

  // Se o usuário quiser realizar a busca, chama a função de buscar endereço.
  if (realizarBusca) {
    buscarEndereco(cepsAnteriores);
  }
});
