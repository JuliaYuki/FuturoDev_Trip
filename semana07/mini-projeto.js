// Exercicio 1
class Produto {
  nome;
  preco;
  quantidade;

  // Exercicio2
  constructor(valorNome, valorPreco, valorQuantidade) {
    this.nome = valorNome;
    this.preco = valorPreco;
    this.quantidade = valorQuantidade;
  }

  //Exercicio3
  Vender(quantidadeVendida) {
    if (quantidadeVendida > this.quantidade) {
      console.log("Estoque Insuficiente");
      console.log(`Existem apenas ${this.quantidade} unidades disponíveis.`);
      return;
    }
    this.quantidade -= quantidadeVendida;
  }

  // Exercicio4
  Repor(quantidadeReposta) {
    this.quantidade += quantidadeReposta;
  }

  // Exercicio5
  MostrarEstoque() {
    console.log(
      `O produto ${this.nome} custa R$${this.preco} e possui ${this.quantidade} unidades disponíveis.\n`
    );
  }

  //Exercicio6
  AtualizarPreco(novoValor) {
    this.preco = novoValor;
  }
}

// Exercicio7
class Pessoa {
  nome;
  idade;
  profissao;

  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
}

// Exercicio8
class Cliente extends Pessoa {
  telefone;
  email;
  clienteDesde;

  constructor(nome, idade, profissao, telefone, email, clienteDesde) {
    super(nome, idade, profissao);
    this.telefone = telefone;
    this.email = email;
    this.clienteDesde = clienteDesde;
  }

  MostrarDadosCliente() {
    console.log(
      `Dados do cliente: \nNome: ${this.nome}\nIdade: ${this.idade}\nProfissão: ${this.profissao}\nTelefone: ${this.telefone}\nEmail: ${this.email}\nCliente Desde: ${this.clienteDesde}`
    );
  }
}

/* #### TESTE #### */
const produto1 = new Produto("Camiseta", 20, 50);
produto1.Repor(10);
produto1.Vender(5);
produto1.Repor(2);
produto1.AtualizarPreco(15);
produto1.MostrarEstoque();

const cliente = new Cliente(
  "Julia",
  28,
  "Programadora",
  "88999999",
  "email@email.com",
  "2015-03-28"
);

cliente.MostrarDadosCliente();
